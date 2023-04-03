export default function useUserData() {
  const { data } = useSession()

  if (!data) return null

  return data.value?.user
}
