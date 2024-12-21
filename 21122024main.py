# 1. Hola Mundo
# Escribe un programa que imprima "Hola, mundo!" en la consola.
print("Hola mundo")

# 2. Operaciones Básicas
# Crea un programa que sume, reste, multiplique y divida dos números ingresados por el usuario.
num1 = float(input("Ingresa el primer número: "))
num2 = float(input("Ingresa el segundo número: "))
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

# 3. Determinar si un número es par o impar
# Escribe un programa que determine si un número ingresado por el usuario es par o impar.
numero = int(input("Ingresa un número: "))
if numero % 2 == 0:
    print(f"El número {numero} es PAR.")
else:
    print(f"El número {numero} es IMPAR.")
