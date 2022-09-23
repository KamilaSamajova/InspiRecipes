// Vue component for handling recipes, recipe upload form and filters on the Recipes page

let recipes = new Vue({
    el: "#app",
    data() {
        return {
            searchValue: 'all',
            maxTime: 500,
            show: 0,
            filteredIngredients: ["rice", "pasta", "potatoes", "milk", "corn", 
                                  "tomato", "pepper", "apple", "strawberry"],
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
                { id: 1, name: "Recipe 1", type: "Breakfast", time: 7, image: '../Pictures/Recipe.jpg',
                    ingredients: [ "strawberry" ], 
                    recipe: "This is how to cook this recipe. This is how to cook this recipe." },
                { id: 2, name: "Recipe 2", type: "Main dish", time: 30, image: '../Pictures/Recipe.jpg', 
                    ingredients: [ "pasta", "tomato" ], 
                    recipe: "This is how to cook this recipe. This is how to cook this recipe." },
                { id: 3, name: "Recipe 3", type: "Main dish", time: 10, image: '../Pictures/Recipe.jpg', 
                    ingredients: [ "rice", "corn" ], 
                    recipe: "This is how to cook this recipe. This is how to cook this recipe." },
                { id: 4, name: "Recipe 4", type: "Soup", time: 3, image: '../Pictures/Recipe.jpg', 
                    ingredients: [ "potatoes", "pepper" ], 
                    recipe: "This is how to cook this recipe. This is how to cook this recipe." },
                { id: 5, name: "Recipe 5", type: "Snack", time: 20, image: '../Pictures/Recipe.jpg', 
                    ingredients: [  "rice", "tomato", "pepper" ], 
                    recipe: "This is how to cook this recipe. This is how to cook this recipe." },
                { id: 6, name: "Recipe 6", type: "Drinks", time: 8, image: '../Pictures/Recipe.jpg', 
                    ingredients: [ "strawberry", "apple" ], 
                    recipe: "This is how to cook this recipe. This is how to cook this recipe." },
            ],
            newRecipe: {
                id: 7,
                name: '',
                type: '',
                time: '',
                ingredients: '',
                recipe: '',
                recipeImage: 'Recipe.jpg',
            }
        }
    },
    methods: {
        // method adding a recipe after filling the upload recipe form
        addRecipe() {
            this.recipes.push({ id: this.newRecipe.id,
                                name: this.newRecipe.name, 
                                type: this.newRecipe.type, 
                                time: this.newRecipe.time, 
                                ingredients: this.newRecipe.ingredients.split(","), 
                                recipe: this.newRecipe.recipe, 
                                image: this.newRecipe.recipeImage});
            
            this.show = 0;
            this.searchValue = 'all';
            
            this.newRecipe.name = '';
            this.newRecipe.type = '';
            this.newRecipe.time = '';
            this.newRecipe.ingredients = '';
            this.newRecipe.recipe = '';
            this.newRecipe.id++;
        },

        // method handling the cooking time filter 
        changeMaxTime() {
            this.maxTime = 500
            
            this.times.forEach(time => {
                if (time.checked) {
                    this.maxTime = time.max
                }
            })
        },

        // method hanling the ingredients filter
        addFilteredIngredient() {    
            this.filteredIngredients = []

            this.ingredients.forEach(ingredient => {
                if (ingredient.checked) {
                    this.filteredIngredients.push(ingredient.title);
                }
            })

            if (this.filteredIngredients.length === 0) {
                this.filteredIngredients = ["rice", "pasta", "potatoes", "milk", "corn", 
                "tomato", "pepper", "apple", "strawberry"];
            }
        },

        // method applying all the filteres used and returning the recipes after filtering
        filteredRecipes() {
            let tempRecipes = this.recipes

            tempRecipes = tempRecipes.filter((item) => {
                return (item.time <= this.maxTime)
            })

            tempRecipes = tempRecipes.filter((item) => {
                return (item.ingredients.some(ing => this.filteredIngredients.includes(ing)))
            })
            
            if (this.searchValue == "all") {
                return tempRecipes
            }

            tempRecipes = tempRecipes.filter((item) => {
                return (item.type == this.searchValue)
            })

            return tempRecipes
        },

        // method for loading an image in the upload recipe form
        loadImage () {
            let input = this.$refs.fileInput
            let file = input.files
            if (file && file[0]) {
                let reader = new FileReader
                reader.onload = e => {
                this.newRecipe.recipeImage = e.target.result
                }
                reader.readAsDataURL(file[0])
                this.$emit('input', file[0])
            }
        }
    }
});