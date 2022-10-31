const agregarCeroSiEsNecesario = (valor: number) => {
	if (valor < 10) {
		return "0" + valor;
	} else {
		return "" + valor;
	}
}
export const msToSg = (milisegundos: number) => {
	const minutos = Math.floor(milisegundos / 1000 / 60);
	milisegundos -= minutos * 60000;
	const segundos = (milisegundos / 1000);
	return `${minutos}:${agregarCeroSiEsNecesario(Math.floor(segundos))}`;
};
