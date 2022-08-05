type currentPercentageProps = {
    currentTime: number
    durationTime: number
}

export const currentPercentageBackground = ({currentTime, durationTime}: currentPercentageProps): number => {
    const percentage = (currentTime * 100) / durationTime

    return percentage;
}