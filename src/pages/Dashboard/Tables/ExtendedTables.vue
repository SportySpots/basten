<template>
  <div>
    <card>
      <div slot="header">
        <h4 class="card-title">Table with Links</h4>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <el-table :data="tableData">
            <el-table-column 
              min-width="50" 
              type="index"/>
            <el-table-column 
              min-width="150" 
              prop="name"
              label="Name"/>
            <el-table-column 
              min-width="200" 
              prop="job"
              label="Job Position"/>
            <el-table-column 
              min-width="150" 
              prop="salary"
              label="Salary"/>
            <el-table-column 
              min-width="150"
              header-align="right"
              label="Actions">
              <div 
                slot-scope="{row}" 
                class="text-right table-actions">
                <el-tooltip 
                  :open-delay="300"
                  content="Info"
                  placement="top">
                  <n-button 
                    type="info" 
                    size="sm" 
                    icon>
                    <i class="now-ui-icons users_single-02"/>
                  </n-button>
                </el-tooltip>


                <el-tooltip 
                  :open-delay="300"
                  content="Settings"
                  placement="top">
                  <n-button 
                    type="success" 
                    size="sm" 
                    icon>
                    <i class="now-ui-icons ui-2_settings-90"/>
                  </n-button>
                </el-tooltip>

                <el-tooltip 
                  :open-delay="300"
                  content="Delete"
                  placement="top">
                  <n-button 
                    type="danger" 
                    size="sm" 
                    icon>
                    <i class="now-ui-icons ui-1_simple-remove"/>
                  </n-button>
                </el-tooltip>

              </div>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </card>
    <card>
      <div slot="header">
        <h4 class="card-title">Striped Table with Checkboxes</h4>
      </div>
      <div class="row table-full-width">
        <div class="col-sm-12">
          <el-table 
            :data="tableData"
            stripe>
            <el-table-column type="index"/>
            <el-table-column width="60">
              <div 
                slot-scope="{row}" 
                class="checkbox-cell">
                <n-checkbox v-model="row.active"/>
              </div>
            </el-table-column>
            <el-table-column 
              prop="name"
              label="Name"/>
            <el-table-column 
              prop="job"
              label="Job Position"/>
            <el-table-column 
              prop="salary"
              label="Salary"/>

          </el-table>
        </div>
      </div>
    </card>
    <div class="row">
      <div class="col-md-12">
        <card>
          <div slot="header">
            <h4 class="card-title">Shopping Cart Table</h4>
            <br>
          </div>
          <shopping-table/>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import { Table, TableColumn } from 'element-ui'
import { Checkbox } from 'src/components'
import ShoppingTable from './ExtendedTables/ShoppingTable'

export default {
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Checkbox.name]: Checkbox,
    ShoppingTable,
  },
  data() {
    return {
      tableData: [
        {
          name: 'Andrew Mike',
          job: 'Develop',
          salary: '€ 99,225',
          active: false,
        },
        {
          name: 'John Doe',
          job: 'Design',
          salary: '€ 89,241',
          active: false,
        },
        {
          name: 'Alex Mike',
          job: 'Design',
          salary: '€ 92,144',
          active: false,
        },
        {
          name: 'Mike Monday',
          job: 'Marketing',
          salary: '€ 49,990',
          active: true,
        },
        {
          name: 'Paul dickens',
          job: 'Communication',
          salary: '€ 69,201',
          active: true,
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.checkbox-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
}
</style>
