const REQUIRED_FIELD = 'Обязательно для заполнения'

export const loginValidation = {
     required: REQUIRED_FIELD,
     // валидация на русские буквы
     validate: (value: string) => {
        // внутри math регулярное выражение
        if(value.match(/[а-яА-Я]/)) {
            return 'Логин не должен содержать русские буквы'
        }
        return true
     }
 }

 export const passwordValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
       if(value.length < 6) {
           return 'Пароль содержит более 6 символов'
       }
       return true
    }
}