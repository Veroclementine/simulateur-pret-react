const formatArgent = (value)=>{
    const formatter = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
    });
    return formatter.format(value);
}

export {
    formatArgent
}