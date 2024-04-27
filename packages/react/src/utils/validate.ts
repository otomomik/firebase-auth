export const validateEmail = (email: string) => {
  if (!email.trim()) {
    return 'メールアドレスを入力してください'
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return '正しい形式のメールアドレスを入力してください'
  }

  return null
}

export const validatePassword = (password: string) => {
  if (!password.trim()) {
    return 'パスワードを入力してください'
  }

  if (password.length < 8) {
    return '8文字以上のパスワードを入力してください'
  }

  if (password.length > 32) {
    return '32文字以下のパスワードを入力してください'
  }

  // TODO 記号とのvalidationを追加

  return null
}
