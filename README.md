Simon Says
===
Visualizzare in pagina 5 numeri casuali (tutti differenti). Da lì parte un timer di 5 secondi.
Dopo 5 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente(tramite il prompt() o tramite input).
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

## Procedimento
1. Creare un array vuoto in cui si inseriranno i 5 numeri casuali;
2. Funzione Math random di numeri compresi tra 1 e 10 per 5 volte;
3. A questo punto i numeri casuali verranno inseriti nell'array vuoto;
4. Per stampare in pagina si dichiara una costante che creerà degli h2 al cui interno ci saranno i singoli numeri estratti dall'array.
5. Timing function (timeout) per far scomparire i numeri e il bottone e far ricomparire un altro.
6. Ora si deve richiamare il btnGo e si deve racchiudere ciò che scrive l'utente in una variabile che verrà trasformata in un array;