<template>
  <div class="box-text">
    <h3>RESUMEN DE TU COMPRA</h3>
    <ul>
      <li>Película:</li>
      <li>Sala:</li>
      <li>Función:</li>
      <li>Fecha:</li>
      <li></li>
    </ul>
  </div>
  <div class="box-seats my-5">
    <n-space vertical>
      <n-table striped class="text-center">
        <thead>
          <tr>
            <th>Silla</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </n-table>
    </n-space>
  </div>
  <div class="box-buy text-center">
    <n-button type="info"> Pagar </n-button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
