import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function HabitsEmpty() {
  const { navigate } = useNavigation()

  return (
    <Text className="text-zinc-400 text-base">
      Você ainda não está monitorando nenhum hábito, comece {' '}
      <Text 
        className="text-violet-400 text-base underline activate:text-violet-500"
        onPress={() => navigate('new')}
      >
        cadastrando um.
      </Text>
    </Text>
  ) 
}