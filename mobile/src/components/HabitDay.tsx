import { Dimensions, TouchableOpacity, TouchableOpacityProps } from "react-native";
import clsx from "clsx"

import { generateProgressPercentage } from "../utils/generateProgressPercentage";
import dayjs from "dayjs";

const WEEK_DAYS = 7
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5)

interface Props extends TouchableOpacityProps {
  date: Date;
  amountOfHabits?: number;
  amountCompleted?: number; 
}

export function HabitDay({date, amountOfHabits = 0, amountCompleted = 0, ...rest }: Props) {
  const amountAccomplishedPertentage = amountOfHabits > 0 ? generateProgressPercentage(amountOfHabits, amountCompleted) : 0
  const today = dayjs().startOf('day').toDate()
  const isCurrentDay = dayjs(date).isSame(today, 'day')
  
  return (
    <TouchableOpacity
      className={clsx("border-2 rounded-lg m-1", {
        ["bg-zinc-900 border-zinc-800"] : amountAccomplishedPertentage === 0,
        ["bg-violet-900 border-violet-700"] : amountAccomplishedPertentage > 0 && amountAccomplishedPertentage < 20,
        ["bg-violet-800 border-violet-600"] : amountAccomplishedPertentage >= 20 && amountAccomplishedPertentage < 40,
        ["bg-violet-700 border-violet-500"] : amountAccomplishedPertentage >= 40 && amountAccomplishedPertentage < 60,
        ["bg-violet-600 border-violet-500"] : amountAccomplishedPertentage >= 60 && amountAccomplishedPertentage < 80,
        ["bg-violet-500 border-violet-400"] : amountAccomplishedPertentage >= 80,
        ["border-white border-4"]: isCurrentDay
      })}
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      activeOpacity={0.5}
      {...rest}
    />
  )
}