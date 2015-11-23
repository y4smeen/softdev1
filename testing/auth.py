def legal_password(s):
    """
    Determine if a password s is legally formed
    
    Arguments:
    s: a string representing a possible password
    
    Return: True if s is legally formed, False otherwise

    Notes:
    Legal passwords are/have:
    - between 5 and 8 characters in length
    - have at least one digit
    - have at least one upper case letter
    - have at least one lower case letter
    """
    l = len(s)
    if l < 5 or l > 8:
        return False
    return True
