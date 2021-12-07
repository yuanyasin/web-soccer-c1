import {Schedule} from "../interface/schedule"
import {Team} from "../interface/team"

export const SEASON_SCHEDULE:Schedule[]=[
    {id:1,PlayingDate:new Date(2021,10,21),HomeTeam:'Persib',
    AwayTeam:'Persipon',HomeScore:3,AwayScore:3,
    RefName:'Budi',Notes:'Overtime'},
    {id:2,PlayingDate:new Date(2021,10,22),HomeTeam:'Persib',
    AwayTeam:'Persija',HomeScore:2,AwayScore:0,
    RefName:'Susanto',Notes:'Overtime'},
    {id:3,PlayingDate:new Date(2021,10,23),HomeTeam:'Psms',
    AwayTeam:'Persipon',HomeScore:3,AwayScore:2,
    RefName:'Herlambang',Notes:'Overtime'},
    {id:4,PlayingDate:new Date(2021,10,24),HomeTeam:'Psis',
    AwayTeam:'Psm',HomeScore:5,AwayScore:3,
    RefName:'Leo',Notes:'Overtime'},
    {id:5,PlayingDate:new Date(2021,11,1),HomeTeam:'Persib',
    AwayTeam:'Persipura',HomeScore:2,AwayScore:4,
    RefName:'Budi',Notes:'Pertandingan Memanas'},
]
export const Teams:Team[]=[
    {id:1,name:'Persib',type:'Klub Lokal'},
    {id:2,name:'Persipon',type:'Klub Lokal'},
    {id:3,name:'Persija',type:'Klub Lokal'},
    {id:4,name:'Psms',type:'Klub Lokal'},
    {id:5,name:'Psis',type:'Klub Lokal'},
    {id:6,name:'Psm',type:'Klub Lokal'},
    {id:7,name:'Persipura',type:'Klub Lokal'},
]