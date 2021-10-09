//Susponse的fallback可以定义组件渲染时间过长或失败时的渲染内容
import React, { memo, Suspense, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import routes from '@/router'
//骨架屏
import { Skeleton } from 'antd'
import ThemeDialog from '@/components/theme-dialog/index'
import initLoginInfo from '@/config/token.js'
import { setLoginInfo, getLoginInfo } from '@/utils/secret-key'
import { getLoginProfileInfo } from '@/components/theme-login/store/actionCreator'
import {
  addPlaylistId,
  getCurrentSongIndex,
  getPlaylistId,
  initCurrentSongIndex
} from '../../utils/localstorage'
//默认音乐ID数组
import { SONG_PLAYLIST_ID as songplaylistId } from '@/common/constants'
import { getSongDetailArrayAction } from '../player/store/index'

export default memo(function APPWrapper() {
  const [isShow, setIsShow] = useState(false)
  const dispatch = useDispatch()
  // 初始化
  const initLogin = () => {
    // 本地存在登录信息则进行登录
    if (localStorage.getItem('loginInfo') != null) {
      const { username, password } = getLoginInfo('loginInfo')
      username && password
        ? dispatch(getLoginProfileInfo(username, password))
        : console.log('当前登录的默认信息')
    } else {
      // 不存在登录信息则存入默认信息
      setLoginInfo('loginInfo', initLoginInfo)
    }
  }
  initLogin()
  // 添加默认歌曲ID(本地存储默认歌曲id) useEffect绑定[]意味着只在开始时执行一次
  useEffect(() => {
    addPlaylistId(songplaylistId)
    // 初始化音乐索引，记录当前正在播放的歌曲index为0
    initCurrentSongIndex()
  }, [])
  //useEffect绑定dispatch意味着其他组件中调用dispatch方法后该会调回执行
  useEffect(() => {
    // 动态获取locals store音乐索引 获取当前歌曲的index 默认为0 记录在本地
    const index = getCurrentSongIndex()
    dispatch(getSongDetailArrayAction(getPlaylistId(), index))
  }, [dispatch])
  //上传音乐组件取消方法
  const handleOk = () => {
    setIsShow(false)
  }
  const handleCancel = () => {
    setIsShow(false)
  }
  return (
    <>
      <Suspense fallback={<Skeleton active />}>{renderRoutes(routes)}</Suspense>
      {/* 全局上传音乐组件 */}
      <ThemeDialog
        controlShow={isShow}
        title="上传音乐"
        handleOk={handleOk}
        handleCancel={handleCancel}
      >
        <h2>hello dialog</h2>
        <h3>上传音乐</h3>
      </ThemeDialog>
    </>
  )
})
