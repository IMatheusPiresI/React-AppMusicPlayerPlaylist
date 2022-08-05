export const formatDurationMusic = (duration: number): string => {
    if (duration) {
      const minutes = Math.floor(duration / 60);
      const seconds = Math.floor(duration % 60);
      const durationFormatted = `${minutes < 10 ? "0" + minutes : minutes}:${
        seconds < 10 ? "0" + seconds : seconds
      }`;

      return durationFormatted;
    }
    return "00:00";
  };