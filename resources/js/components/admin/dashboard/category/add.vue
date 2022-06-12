<template>
<div>
    <section class="content mt-3">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-md-6" style="margin-left: 250px;margin-top: 50px;">
                    <!-- general form elements -->
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Add Category</h3>
                        </div>
                        <!-- /.card-header -->
                        <!-- form start -->
                        <form role="form" @submit.prevent="categorySave">
                            <div class="card-body">
                                <div class="form-group">
                                    Category Name<input v-model="form.category_name" type="text" name="category_name" class="form-control" id="" placeholder="Enter category name">
                                    <div class="text-danger" v-if="form.errors.has('category_name')" v-html="form.errors.get('category_name')"></div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'category_add',
    data: () => ({
        form: new Form({
            category_name: '',
        })
    }),
    methods: {
        async categorySave() {
            const response = await this.form.post('/categorySave');
            this.$router.push('/category');

            // sweetalert mixin
            Toast.fire({
                icon: 'success',
                title: 'Category addedd successfully'
            });
            // console.log(response.data.message);
        }
    }
}
</script>

<style scoped>

</style>
