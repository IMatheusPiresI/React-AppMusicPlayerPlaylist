import { createContext, ReactNode, useContext, useState } from "react";
import { musics } from "../mocks/musics";
import { PlayList, playlists } from "../mocks/playlists";

type MusicProviderProps = {
  children: ReactNode;
};

export type Music = {
  id: number;
  name: string;
  audio: HTMLAudioElement;
  img: string;
  playlist?: boolean;
};

type MusicContextProps = {
  music: Music;
  setMusic: (music: Music) => void;
  playlist: PlayList;
  setPlayList: (playlist: PlayList) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  pause: () => void;
  play: () => void;
  reset: () => void;
  changeVolume: (volume: number) => void;
  changeDuration: (duration: number) => void;
  nextMusic: () => void;
  nextPlaylist: () => void;
  mute: () => void;
  unMuted: () => void;
  volume: number;
  setVolume: (volume: number) => void;
};

export const MusicContext = createContext<MusicContextProps>(
  {} as MusicContextProps
);

export const MusicProvider = ({ children }: MusicProviderProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [music, setMusic] = useState<Music>({} as Music);
  const [playlist, setPlayList] = useState<PlayList>({} as PlayList);
  const [volume, setVolume] = useState<number>(50);

  const pause = () => {
    music.audio?.pause();
    setIsPlaying(false);
  };

  const play = () => {
    music?.audio.play();
    setIsPlaying(true);
    music.audio.volume = volume / 100;
  };

  const reset = () => {
    music?.audio.pause();
    music.audio.currentTime = 0;
  };

  const changeVolume = (volume: number) => {
    music.audio.volume = volume / 100;
    setVolume(volume);
  };

  const changeDuration = (duration: number) => {
    music.audio.currentTime = duration;
  };

  const nextMusic = () => {
    const totalMusic = musics.length;
    const { audio, id, img, name } =
      musics[music.id === totalMusic ? 0 : music.id];
    setMusic({
      audio: new Audio(audio),
      id,
      img,
      name,
      playlist: false,
    });
  };

  const nextMusicPlaylist = () => {
    const totalMusicsPlaylist = playlist.musics.length;
    const { img, id, audio, name } =
      playlist.musics[music.id === totalMusicsPlaylist ? 0 : music.id];

    setMusic({
      id,
      img,
      audio: new Audio(audio),
      name,
      playlist: true,
    });
  };

  const nextPlaylist = () => {
    const totalMusics = playlist.musics.length;
    if (music.id === playlist.musics[totalMusics - 1].id) {
      const totalPlaylist = playlists.length;
      const { image, id, musics, name } =
        playlists[playlist.id === totalPlaylist ? 0 : playlist.id];
      setPlayList({
        id,
        image,
        musics,
        name,
      });

      setMusic({
        audio: new Audio(musics[0].audio),
        id: musics[0].id,
        img: musics[0].img,
        name: musics[0].name,
        playlist: true,
      });
    } else {
      nextMusicPlaylist();
    }
  };

  const mute = () => {
    music.audio.volume = 0;
    setVolume(0);
  };

  const unMuted = () => {
    music.audio.volume = 10 / 100;
    setVolume(10);
  };

  const value = {
    music,
    setMusic,
    playlist,
    setPlayList,
    isPlaying,
    setIsPlaying,
    pause,
    play,
    reset,
    changeVolume,
    changeDuration,
    nextMusic,
    nextPlaylist,
    mute,
    unMuted,
    volume,
    setVolume,
  };

  return (
    <>
      <MusicContext.Provider value={value}>{children}</MusicContext.Provider>
    </>
  );
};

export const useMusicContext = () => useContext(MusicContext);
