import React from 'react'
import { Redirect } from 'react-router-dom'
// 默认加载
import Test from '@/pages/test'
// 懒加载
const JMDiscover = React.lazy(() => import('@/pages/discover'))
const JMRecommend = React.lazy(() => import('@/pages/discover/child-pages/recommend'))
const JMToplist = React.lazy(() => import('@/pages/discover/child-pages/toplist'))
const JMSongs = React.lazy(() => import('@/pages/discover/child-pages/songs'))
const JMAlbum = React.lazy(() => import('@/pages/discover/child-pages/album'))
const JMSongDetail = React.lazy(() => import('@/pages/player'))
const JMFriend = React.lazy(() => import('@/pages/friend'))
const JMMine = React.lazy(() => import('@/pages/mine'))
const JMSearch = React.lazy(() => import('@/pages/search'))
const JMSingle = React.lazy(() => import('@/pages/search/child-pages/single'))
const JMSinger = React.lazy(() => import('@/pages/search/child-pages/singer'))
const JMSonglist = React.lazy(() => import('@/pages/song-detail'))
const JMUser = React.lazy(() => import('@/pages/profile'))
const JM404 = React.lazy(() => import('@/pages/404'))

const routes = [
  { path: '/', exact: true, render: () => <Redirect to="/discover" /> },
  {
    path: '/discover',
    component: JMDiscover,
    routes: [
      {
        path: '/discover',
        //准确匹配
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      { path: '/discover/recommend', component: JMRecommend },
      { path: '/discover/ranking', component: JMToplist },
      { path: '/discover/songs', component: JMSongs },
      { path: '/discover/album', component: JMAlbum },
      { path: '/discover/song', component: JMSongDetail },
    ],
  },
  { path: '/mine', component: JMMine },
  { path: '/friend', component: JMFriend },
  {
    path: '/search',
    component: JMSearch,
    routes: [
      {
        path: '/search',
        exact: true,
        render: () => <Redirect to="/search/single?song=&type=1" />,
      },
      { path: '/search/single', component: JMSingle },
      { path: '/search/singer', component: JMSinger }
    ],
  },
  {
    path: '/songlist',
    exact: true,
    component: JMSonglist,
  },
  {
    path: '/user',
    exact: true,
    component: JMUser,
  },
  {
    path: '/test',
    exact: true,
    component: Test,
  },
  {
    component: JM404,
  },
]

export default routes
