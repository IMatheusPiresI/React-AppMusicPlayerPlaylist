import ImageMusic from "../assets/images/thereal.jpg";
import All_Eyes_on_You from '../assets/musics/All_Eyes_on_You.mp3'
import Mambo from '../assets/musics/Mambo.mp3'
import TRO_faixa from '../assets/musics/TRO_faixa.mp3'
import Tropa_do_Clona from '../assets/musics/Tropa_do_Clona.mp3'
import Reis_de_Copas from '../assets/musics/Reis_de_Copas.mp3'
import Flow_Yaya_Toure_2 from '../assets/musics/Flow_Yaya_Toure_2.mp3'
import Frevo_Na_Laje_2 from '../assets/musics/Frevo_Na_Laje_2.mp3'
import Buffalo_Drill from '../assets/musics/Buffalo_Drill.mp3'
import Hit_Machine from '../assets/musics/Hit_Machine.mp3'
import Flow_Yaya_Toure from '../assets/musics/Flow_Yaya_Toure.mp3'
import cem_placas from '../assets/musics/100_placas.mp3'
import Sinfonia_do_Fda_se from '../assets/musics/8_Sinfonia_do_Fda_se.mp3'
import Frevo_na_Laje from '../assets/musics/Frevo_na_Laje.mp3'
import Nova_Atlanta from '../assets/musics/Nova_Atlanta.mp3'
import Invictus from '../assets/musics/Invictus.mp3'
import Predestinado from '../assets/musics/Predestinado.mp3'
import Bem_Vindo_Show_de_Truman from '../assets/musics/Bem_Vindo_Show_de_Truman.mp3'
import Solitude from '../assets/musics/Solitude.mp3'
import Balaclava from '../assets/musics/Balaclava.mp3'
import Premiere from '../assets/musics/Premiere.mp3'
import { Musics } from "./musics";



export type PlayList = {
    id: number;
    name: string;
    image: string;
    musics: Musics[];
}

export const playlists: PlayList[] = [
    {
        
        id: 1,
        name: 'The Real Tapes',
        image: ImageMusic,
        musics: [
            {
                id: 1,
                name: 'All Eyes on You',
                audio: All_Eyes_on_You,
                img: ImageMusic,
                time: "03:07"
            },
            {
                id: 2,
                name: 'Mambo',
                audio: Mambo,
                img: ImageMusic,
                time: "02:47"
            },
            {
                id: 3,
                name: 'TRO Faixa',
                audio: TRO_faixa,
                img: ImageMusic,
                time: "03:14"
            },
            {
                id: 4,
                name: 'Tropa do Clona',
                audio: Tropa_do_Clona,
                img: ImageMusic,
                time: "03:29"
            },
            {
                id: 5,
                name: 'Reis de Copas',
                audio: Reis_de_Copas,
                img: ImageMusic,
                time: "03:24"
            },
            {
                id: 6,
                name: 'Flow Yaya Touré 2',
                audio: Flow_Yaya_Toure_2,
                img: ImageMusic,
                time: "03:21"
            },
            {
                id: 7,
                name: 'Frevo na Laje 2',
                audio: Frevo_Na_Laje_2,
                img: ImageMusic,
                time: "02:37"
            },
        ]
    },
    {
        
        id: 2,
        name: 'Flow Yaya Touré',
        image: ImageMusic,
        musics: [
            {
                id: 1,
                name: 'Flow Yaya Touré',
                audio: Flow_Yaya_Toure,
                img: ImageMusic,
                time: "03:07"
            },
            {
                id: 2,
                name: 'Buffalo Drill',
                audio: Buffalo_Drill,
                img: ImageMusic,
                time: "02:47"
            },
            {
                id: 3,
                name: 'Hit Machine',
                audio: Hit_Machine,
                img: ImageMusic,
                time: "03:14"
            },
        ]
    },
    {
        
        id: 3,
        name: 'Coming Out Of The Nightmare',
        image: ImageMusic,
        musics: [
            {
                id: 1,
                name: '100 placas',
                audio: cem_placas,
                img: ImageMusic,
                time: "03:07"
            },
            {
                id: 2,
                name: '8º Sinfonia do F*da-se',
                audio: Sinfonia_do_Fda_se,
                img: ImageMusic,
                time: "02:47"
            },
            {
                id: 3,
                name: 'Frevo na Laje',
                audio: Frevo_na_Laje,
                img: ImageMusic,
                time: "03:14"
            },
        ]
    },
    {
        
        id: 4,
        name: 'The Last Order',
        image: ImageMusic,
        musics: [
            {
                id: 1,
                name: 'Nova Atlanta',
                audio: Nova_Atlanta,
                img: ImageMusic,
                time: "03:07"
            },
            {
                id: 2,
                name: 'Invictus',
                audio: Invictus,
                img: ImageMusic,
                time: "02:47"
            },
            {
                id: 3,
                name: 'Predestinado',
                audio: Predestinado,
                img: ImageMusic,
                time: "03:14"
            },
            {
                id: 4,
                name: 'Bem Vindo Show de Truman',
                audio: Bem_Vindo_Show_de_Truman,
                img: ImageMusic,
                time: "03:14"
            },
            {
                id: 5,
                name: 'Solitude',
                audio: Solitude,
                img: ImageMusic,
                time: "03:14"
            },
            {
                id: 6,
                name: 'Balaclava',
                audio: Balaclava,
                img: ImageMusic,
                time: "03:14"
            },
            {
                id: 7,
                name: 'Premiere',
                audio: Premiere,
                img: ImageMusic,
                time: "03:14"
            },
        ]
    },
]