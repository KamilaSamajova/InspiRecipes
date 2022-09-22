let recipes = new Vue({
    el: "#app",
    data() {
        return {
            searchValue: 'all',
            maxTime: 500,
            show: true,
            times: [
                { max: 5, title: "< 5 mins", checked: false },
                { max: 10, title: "< 10 mins", checked: false },
                { max: 20, title: "< 20 mins", checked: false },
                { max: 30, title: "< 30 mins", checked: false },
                { max: 500, title: "> 30 mins", checked: false },
            ],
            ingredients: [
                { title: "rice", checked: false },
                { title: "pasta", checked: false },
                { title: "potatoes", checked: false },
                { title: "milk", checked: false },
                { title: "corn", checked: false },
                { title: "tomato", checked: false },
                { title: "pepper", checked: false },
                { title: "apple", checked: false },
                { title: "strawberry", checked: false },
            ],
            recipes: [
                { name: "Recipe 1", type: "Breakfast", time: 7, image: '../Pictures/Recipe.jpg',
                    ingredients: [ "strawberry" ], 
                    recipe: "" },
                { name: "Recipe 2", type: "Main dish", time: 30, image: '../Pictures/Recipe.jpg', 
                    ingredients: [ "pasta", "tomato" ], 
                    recipe: "" },
                { name: "Recipe 3", type: "Main dish", time: 10, image: '../Pictures/Recipe.jpg', 
                    ingredients: [ "rice", "corn" ], 
                    recipe: "" },
                { name: "Recipe 4", type: "Soup", time: 3, image: '../Pictures/Recipe.jpg', 
                    ingredients: [ "potatoes", "pepper" ], 
                    recipe: "" },
                { name: "Recipe 5", type: "Snack", time: 20, image: '../Pictures/Recipe.jpg', 
                    ingredients: [  "rice", "tomato", "pepper" ], 
                    recipe: "" },
                { name: "Recipe 6", type: "Drinks", time: 8, image: '../Pictures/Recipe.jpg', 
                    ingredients: [ "strawberry", "apple" ], 
                    recipe: "" },
            ],
            newRecipe: {
                name: '',
                type: '',
                time: '',
                recipe: '',
            }
        }
    },
    methods: {
        addRecipe() {
            this.recipes.push({ name: this.newRecipe.name, 
                                type: this.newRecipe.type, 
                                time: this.newRecipe.time, 
                                ingredients: [], 
                                recipe: this.newRecipe.recipe, 
                                image: '../Pictures/Recipe.jpg'});
            
            this.show = true;
            this.searchValue = 'all';
            
            this.newRecipe.name = '';
            this.newRecipe.type = '';
            this.newRecipe.time = '';
            this.newRecipe.recipe = '';
        },

        changeMaxTime() {
            this.maxTime = 500
            
            this.times.forEach(time => {
                if (time.checked) {
                    this.maxTime = time.max
                }
            })
        },

        filteredRecipes() {
            let tempRecipes = this.recipes

            tempRecipes = tempRecipes.filter((item) => {
                return (item.time <= this.maxTime)

            })

            if (this.searchValue == "all") {
                return tempRecipes
            }

            tempRecipes = tempRecipes.filter((item) => {
                return (item.type == this.searchValue)
            })

            return tempRecipes
        }
    }
});