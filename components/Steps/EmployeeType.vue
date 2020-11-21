<template>
  <v-row justify="center">
    <v-col xs="8" sm="8" md="8" lg="8">
      <Chooser @chosen="chosenItem" :items="items" label="tipo de empleado"></Chooser>
    </v-col>
  </v-row>
</template>

<script>
import Chooser from '../Chooser'
export default {
  data: () => ({
    items: [
      'AFRODESCENDIENTE',
      'AGRICULTOR',
      'AMA DE CASA',
      'ARTISTA',
      'CANDIDATOS',
      'COMERCIANTE',
      'DELINCUENCIA',
      'DEPORTISTA',
      'DESEMPLEADO',
      'EDUCADOR',
      'EMPLEADO ARMADA/MARINA',
      'EMPLEADO CTI',
      'EMPLEADO EJERCITO',
      'EMPLEADO INPEC',
      'EMPLEADO PARTICULAR',
      'EMPLEADO POLICIAL',
      'EMPLEADO PUBLICO',
      'EMPLEADO SALUD',
      'ESTUDIANTE',
      'ETNIA INDIGENA',
      'GANADERO',
      'GRUPOS ILEGALES',
      'INDEPENDIENTE',
      'LIDER CIVICO',
      'MIEMBRO ONG',
      'PENSIONADO',
      'RAMA JUDICIAL',
      'RELIGIOSO',
      'SECTOR FINANCIERO',
      'SECTOR IND',
      'NO REPORTA',
    ],
  }),
  methods: {
    chosenItem(val) {
      this.$emit('chosen', val)
    }
  },
  components: {
    Chooser,
  },
}
</script>