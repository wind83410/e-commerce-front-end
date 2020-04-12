<template>
    <div>
        <div class="mt-4">
            <button class="btn btn-primary">新增產品</button>
        </div>
        <table class="table mt-4">
            <thead>
                <th scope="col">分類</th>
                <th scope="col">商品名稱</th>
                <th scope="col">原價</th>
                <th scope="col">售價</th>
                <th scope="col">是否啟用</th>
                <th scope="col">功能</th>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>{{product.category}}</td>
                    <td>{{product.title}}</td>
                    <td class="text-right">{{product.origin_price}}</td>
                    <td class="text-right">{{product.price}}</td>
                    <td>
                        <span v-if="product.is_enabled" class="text-success">啟用</span>
                        <span v-else class="text-danger">未啟用</span>
                    </td>
                    <td>
                        <button class="btn btn-sm btn-outline-primary">編輯</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: []
        };
    },
    methods: {
        getProducts() {
            const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/admin/products`;
            const vm = this;
            this.$http.get(api).then((response) => {
                vm.products = response.data.products;
            });
        }
    },
    created() {
        this.getProducts();
    }
}
</script>