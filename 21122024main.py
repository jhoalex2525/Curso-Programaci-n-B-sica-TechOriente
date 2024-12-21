# 1. Hola Mundo
# Escribe un programa que imprima "Hola, mundo!" en la consola.
print("Hola mundo")

# 2. Operaciones Básicas
# Crea un programa que sume, reste, multiplique y divida dos números ingresados por el usuario.

def operacionesMatematicas (num1, num2):
    suma = num1 + num2
    resta = num1 - num2
    multiplicacion = num1 * num2
    if num2 != 0:
        division = num1 / num2
    else:
        division = "No se puede dividir por cero"
    print("Resultados:")
    print(f"Suma: {suma}")
    print(f"Resta: {resta}")
    print(f"Multiplicación: {multiplicacion}")
    print(f"División: {division}")
num1 = float(input("Ingresa el primer número: "))
num2 = float(input("Ingresa el segundo número: "))
operacionesMatematicas(num1, num2)
# 3. Determinar si un número es par o impar
# Escribe un programa que determine si un número ingresado por el usuario es par o impar.
numero = int(input("Ingresa un número: "))
if numero % 2 == 0:
    print(f"El número {numero} es par.")
else:
    print(f"El número {numero} es impar.")

# 4. Calculadora de áreas
# Crea un programa que calcule el área de un triángulo.
base = float(input("Ingresa la base del triángulo: "))
altura = float(input("Ingresa la altura del triángulo: "))
area = (base * altura) / 2
print(f"El área del triángulo es: {area}")

# 5. Lista de números
# Escribe un programa que cree una lista con cinco números ingresados por el usuario y luego imprima la lista.
numeros = []
for i in range(5):
    numero = float(input(f"Ingrese el número {i + 1}: "))
    numeros.append(numero)
print("La lista de números es:", numeros)

# 6. Adivina el número
# Crea un programa donde el usuario deba adivinar un número entre 1 y 10.
import random
numero_secreto = random.randint(1, 10)
intento = 0
while True:
    intento = int(input("Adivina un número entre 1 y 10: "))
    if intento < numero_secreto:
        print("Estás por debajo.")
    elif intento > numero_secreto:
        print("Estás por encima.")
    else:
        print(f"El número {numero_secreto} es correcto.")
        break

# 7. Tabla de multiplicar
# Crea un programa que imprima la tabla de multiplicar de un número ingresado por el usuario.
numero = int(input("Ingresa un número para generar tabla de multiplicar: "))
print(f"\nTabla de multiplicar del {numero}:")
for i in range(1, 11):
    resultado = numero * i
    print(f"{numero} x {i} = {resultado}")

# 8. Verificar palíndromo
# Escribe un programa que determine si una palabra ingresada por el usuario es un palíndromo (se lee igual al derecho y al revés).
palabra = input("Ingresa una palabra: ")
palabra = palabra.lower()
if palabra == palabra[::-1]:
    print(f"La palabra '{palabra}' es un palíndromo.")
else:
    print(f"La palabra '{palabra}' no es un palíndromo.")

# 9. Números del 1 al 100
# Escribe un programa que imprima los números del 1 al 100, pero:
# • Si el número es múltiplo de 3, imprime "Fizz".
# • Si el número es múltiplo de 5, imprime "Buzz".
# • Si es múltiplo de ambos, imprime "FizzBuzz".
# Bucle para recorrer los números del 1 al 100
for i in range(1, 101):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)

# 10. Contar vocales
# Escribe un programa que cuente cuántas vocales tiene una frase ingresada por el usuario.
frase = input("Ingresa una frase: ")
contador_vocales = 0
frase = frase.lower()
for letra in frase:
    if letra in 'aeiouáéíóú':
        contador_vocales += 1
print(f"La frase tiene {contador_vocales} vocales.")
