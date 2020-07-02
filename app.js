
const app = new Vue({
	el: '#app',
	data: {
		searchTerm: 'autoputevi', // inicijalni term
		results: []
	},
	watch: {
		searchTerm: {
			handler: 'doSearch',	// okini search čim se searchTerm promijeni
			immediate: true				// odma okini
		}
	},
	methods: {
		doSearch() {
			this.results = search(this.searchTerm);
		}
	}
});

function search(term) {
	if (!term)
		return esIndex.documentStore.docs; // ako je prazno, vrati sve..

	const res = esIndex.search(term, {
		fields: {
			title: {
				boost: 2 // title je važniji..
			},
			description: {
				boost: 1
			}
		},
		expand: true
	});
	return res.map(r => r.doc);
}
