'use strict';

angular.module('exphtml5bizApp')
  .factory('events' , function(){
    return [{ 
    	    title: 'Events1',
        date: '2013-12-01',
        space: 'address',
        detail: [
            { title:'session1-1', talker:'name', belong:'xxx.inc', slide: 'URL' },
            { title:'session1-2', talker:'name', belong:'xxx.inc', slide: 'URL' },
            { title:'session1-3', talker:'name', belong:'xxx.inc', slide: 'URL' }
            ]
      },{ 
    	    title: 'Events2',
        date: '2013-12-01',
        space: 'address',
        detail: [
            { title:'session2-1', talker:'name', belong:'xxx.inc', slide: 'URL' },
            { title:'session2-2', talker:'name', belong:'xxx.inc', slide: 'URL' },
            { title:'session2-3', talker:'name', belong:'xxx.inc', slide: 'URL' }
            ]
      },{ 
    	    title: 'Events3',
        date: '2013-12-01',
        space: 'address',
        detail: [
            { title:'session3-1', talker:'name', belong:'xxx.inc', slide: 'URL' },
            { title:'session3-2', talker:'name', belong:'xxx.inc', slide: 'URL' },
            { title:'session3-3', talker:'name', belong:'xxx.inc', slide: 'URL' }
            ]
      }]
  })
  .factory('members', function(){
    return [{
    	  name: 'one',
    	  twitter: 'xxx',
    	  facebook: 'yyy',
    	  blog: 'zzz',
       rss: 'http://feed.rssad.jp/rss/kanaloco/localnews'
    	},{
    	  name: 'tow',
    	  twitter: 'xxx',
    	  facebook: 'yyy',
    	  blog: 'zzz',
       rss: ''
    	},{
    	  name: 'tree',
    	  twitter: 'xxx',
    	  facebook: 'yyy',
    	  blog: 'zzz',
       rss: ''
    	}]
  })
  .factory('actions', function(){
    return [{
          title: 'one',
          detail: 'XXXXXXXXX',
          member: 'name.name'
        },{
          title: 'tow',
          detail: 'XXXXXXXXX',
          member: 'name.name'
        },{
          title: 'tree',
          detail: 'XXXXXXXXX',
          member: 'name.name'
        }]
  })
  .constant('motto', [{
          title: '先進性＜安定性',
          detail: '不安定要素だらけのモダンWeb技術に、いち早く安定して活用できる方法を探ってみる！'
        },{
          title: '日本＋モダンWeb',
          detail: 'レガシーだらけの日本のシステムに、モダンWeb技術を適用する方法を考えてみる！'
        },{
          title: '国内→世界',
          detail: '後追い状態の日本のエンジニアが、世界へアピールできるテクノロジーを生み出してみる！'
        }]
  );
