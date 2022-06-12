<template>
<div>
    <section class="content mt-3" style="margin-left: 250px;margin-top: 30px;">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card-header" style="margin-top: 50px;">
                        <h2>Category List</h2>
                        <div class="text-right">
                            <router-link to="add_category" class="btn btn-xl btn-primary "><i class="fas fa-add">Add</i></router-link>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Category Name</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(categoryList,index) in getCategoryList" :key="categoryList.id" style="margin-top: 350px;">
                                    <th scope="row">{{index}}</th>
                                    <td>{{categoryList.category_name}}</td>
                                    <td>
                                        <router-link to="/" class="btn btn-xs btn-info"><i class="fas fa-edit"></i></router-link>
                                        <router-link to="/" class="btn btn-xs btn-danger"><i class="fas fa-trash"></i></router-link>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'List',
    mounted(){
            this.$store.dispatch('getCategoryList')
        },
    computed:{
        getCategoryList(){
            console.log(this.$store.getters.categoryList);
            return this.$store.getters.categoryList;
        }
    },

}
</script>

<style scoped>

</style>
