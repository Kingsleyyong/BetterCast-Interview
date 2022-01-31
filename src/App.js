import Test from './Component/test'

const App = () => {
   return (
      <div>
         <Test
            name="Leon"
            colour="white"
            url="https://images.unsplash.com/photo-1520315342629-6ea920342047?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
         />

         <Test
            name="Louis"
            colour="black"
            url="https://images.unsplash.com/photo-1548707519-d9908cfebe7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1313&q=80"
         />
      </div>
   )
}

export default App
