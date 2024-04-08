function validateSudokuboard(sudoboardString) {
    // Sjekk om board lengdt ikke er 16
    if (sudoboardString.length !==16) {
        return 'ugyldig brett, feil lengde';
    }
    //Sjekker om board har input utenom 1-4 eller blank.
    const validChars = ['1', '2' ,'3' , '4', ''];
    for (let i = 0 ; i < sudoboardString.length; i++) {
        if (!validChars.includes(sudoboardString[i])) {
            return 'ugyldig brett, ugyldig tegn';
        }
    }


    return 'helt utfylt, ingen feil';
}
