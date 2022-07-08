function capitalize(str: string): string {
  return str && str.length > 0
    ? str.charAt(0).toUpperCase() + str.substring(1).toLocaleLowerCase()
    : ''
}

export { capitalize }
