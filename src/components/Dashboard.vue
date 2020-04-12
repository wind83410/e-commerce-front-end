<template>
  <div>
    <navbar />
    <div class="container-fluid">
      <div class="row">
        <sidebar />
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from './Navbar';
import sidebar from './Sidebar';

export default {
    components: {
        navbar,
        sidebar
    }
}
</script>

