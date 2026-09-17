class ServiceExercicio {
    Somar(num1, num2) {
        if(isNaN(num1) || isNaN(num2)) {
            throw new Error("favor informar somente numeros.")
        }

        return num1 + num2
    }
}

export default new ServiceExercicio()