__all__ = ["expand_des_key", "des_encrypt_block"]

def expand_des_key(key): ...
def des_encrypt_block(key, input, salt: int = 0, rounds: int = 1): ...
def des_encrypt_int_block(key, input, salt: int = 0, rounds: int = 1): ...