def inverte_string(s):
    """
    Função que inverte os caracteres de uma string.
    """
    # Converte a string em uma lista de caracteres
    caracteres = list(s)
    
    # Índices inicial e final para inverter a lista
    inicio = 0
    fim = len(caracteres) - 1
    
    # Inverte os caracteres da lista usando o índice
    while inicio < fim:
        # Troca o caractere no índice inicio com o caractere no índice fim
        caracteres[inicio], caracteres[fim] = caracteres[fim], caracteres[inicio]
        # Atualiza os índices
        inicio += 1
        fim -= 1
    
    # Converte a lista de caracteres de volta para uma string
    s_invertida = ''.join(caracteres)
    
    return s_invertida

# Solicita que o usuário digite a palavra a ser invertida
string_original = input("Digite a palavra a ser invertida: ")

# Chama a função inverte_string para inverter a string digitada
string_invertida = inverte_string(string_original)

print("String original: ", string_original)
print("String invertida: ", string_invertida)
