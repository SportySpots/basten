<template>
  <div class="row">
    <div class="col-12">
      <card
        card-body-classes="table-full-width"
        no-footer-line>
        <h4
          slot="header"
          class="card-title">Paginated Tables</h4>
        <div>
          <div class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap">
            <el-select
              v-model="pagination.perPage"
              class="select-primary mb-3"
              style="width: 200px"
              placeholder="Per page">
              <el-option
                v-for="item in pagination.perPageOptions"
                :key="item"
                :label="item"
                :value="item"
                class="select-default"/>
            </el-select>
            <fg-input>
              <el-input
                v-model="searchQuery"
                type="search"
                class="mb-3"
                clearable
                prefix-icon="el-icon-search"
                style="width: 200px"
                placeholder="Search records"
                aria-controls="datatables"/>
            </fg-input>

          </div>
          <el-table
            :data="queriedData"
            stripe
            style="width: 100%;">
            <el-table-column
              v-for="column in tableColumns"
              :key="column.label"
              :min-width="column.minWidth"
              :prop="column.prop"
              :label="column.label"/>
            <el-table-column
              :min-width="135"
              fixed="right"
              label="Actions">
              <div
                slot-scope="props"
                class="table-actions">
                <n-button
                  class="like"
                  type="info"
                  size="sm"
                  round
                  icon
                  @click.native="handleLike(props.$index, props.row)">
                  <i class="fa fa-heart"/>
                </n-button>
                <n-button
                  class="edit"
                  type="warning"
                  size="sm"
                  round
                  icon
                  @click.native="handleEdit(props.$index, props.row)">
                  <i class="fa fa-calendar"/>
                </n-button>
                <n-button
                  class="remove"
                  type="danger"
                  size="sm"
                  round
                  icon
                  @click.native="handleDelete(props.$index, props.row)">
                  <i class="fa fa-times"/>
                </n-button>
              </div>
            </el-table-column>
          </el-table>
        </div>
        <div
          slot="footer"
          class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap">
          <div class="">
            <p class="card-category">Showing {{ from + 1 }} to {{ to }} of {{ total }} entries</p>
          </div>
          <n-pagination
            v-model="pagination.currentPage"
            :per-page="pagination.perPage"
            :total="total"
            class="pagination-no-border"/>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import { Table, TableColumn, Select, Option } from 'element-ui'
import { Pagination as NPagination } from 'src/components'
import users from './users'
import Fuse from 'fuse.js'
import swal from 'sweetalert2'

export default {
  components: {
    NPagination,
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
  },
  data() {
    return {
      pagination: {
        perPage: 5,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 0,
      },
      searchQuery: '',
      propsToSearch: ['name', 'email', 'age'],
      tableColumns: [
        {
          prop: 'name',
          label: 'Name',
          minWidth: 200,
        },
        {
          prop: 'email',
          label: 'Email',
          minWidth: 250,
        },
        {
          prop: 'age',
          label: 'Age',
          minWidth: 100,
        },
        {
          prop: 'salary',
          label: 'Salary',
          minWidth: 120,
        },
      ],
      tableData: users,
      searchedData: [],
      fuseSearch: null,
    }
  },
  computed: {
    /***
     * Returns a page from the searched data or the whole data. Search is performed in the watch section below
     */
    queriedData() {
      let result = this.tableData
      if (this.searchedData.length > 0) {
        result = this.searchedData
      }
      return result.slice(this.from, this.to)
    },
    to() {
      let highBound = this.from + this.pagination.perPage
      if (this.total < highBound) {
        highBound = this.total
      }
      return highBound
    },
    from() {
      return this.pagination.perPage * (this.pagination.currentPage - 1)
    },
    total() {
      return this.searchedData.length > 0
        ? this.searchedData.length
        : this.tableData.length
    },
  },
  watch: {
    /**
     * Searches through the table data by a given query.
     * NOTE: If you have a lot of data, it's recommended to do the search on the Server Side and only display the results here.
     * @param value of the query
     */
    searchQuery(value) {
      let result = this.tableData
      if (value !== '') {
        result = this.fuseSearch.search(this.searchQuery)
      }
      this.searchedData = result
    },
  },
  mounted() {
    // Fuse search initialization.
    this.fuseSearch = new Fuse(this.tableData, {
      keys: ['name', 'email'],
      threshold: 0.3,
    })
  },
  methods: {
    handleLike(index, row) {
      swal({
        title: `You liked ${row.name}`,
        buttonsStyling: false,
        type: 'success',
        confirmButtonClass: 'btn btn-success btn-fill',
      })
    },
    handleEdit(index, row) {
      swal({
        title: `You want to edit ${row.name}`,
        buttonsStyling: false,
        confirmButtonClass: 'btn btn-info btn-fill',
      })
    },
    handleDelete(index, row) {
      swal({
        title: 'Are you sure?',
        text: `You won't be able to revert this!`,
        type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success btn-fill',
        cancelButtonClass: 'btn btn-danger btn-fill',
        confirmButtonText: 'Yes, delete it!',
        buttonsStyling: false,
      }).then(result => {
        if (result.value) {
          this.deleteRow(row)
          swal({
            title: 'Deleted!',
            text: `You deleted ${row.name}`,
            type: 'success',
            confirmButtonClass: 'btn btn-success btn-fill',
            buttonsStyling: false,
          })
        }
      })
    },
    deleteRow(row) {
      let indexToDelete = this.tableData.findIndex(
        tableRow => tableRow.id === row.id
      )
      if (indexToDelete >= 0) {
        this.tableData.splice(indexToDelete, 1)
      }
    },
  },
}
</script>
