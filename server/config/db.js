const connectDB = async () => {
    try {
      const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysqlroot123!@#',  // Replace with your MySQL root password
        database: 'seminar_booking',    // Replace with your database name
      });
  
      console.log('MySQL connected!');
      return connection;
    } catch (error) {
      console.error('Database connection failed:', error);
      throw error;
    }
  };
  
  // Add this line to export the function as default
  export default connectDB;
  