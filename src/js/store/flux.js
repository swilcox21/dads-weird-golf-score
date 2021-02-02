const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			pointPerHole: [
				{
					p1: null,
					p2: null,
					p3: null,
					p4: null
				}
			]
		},
		actions: {
			// weird function to calculate team points per hole
			teamPoints: () => {
				if (pointPerHole.p1 + pointPerHole.p2 > pointPerHole.p3 + pointPerHole.p4) return 1;
				else if (pointPerHole.p1 + pointPerHole.p2 < pointPerHole.p3 + pointPerHole.p4) return -1;
				else return 0;
			},

			// handle score input function
			handleScoreInput: score => {
				let tempStore = getStore();
				tempStore.pointPerHole.push(score);
				setStore({ tempStore });
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
