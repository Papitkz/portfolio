class DatabaseService {
  constructor() {
    this.initializeDatabase();
  }

  initializeDatabase() {
    if (!localStorage.getItem('crazyClawsDatabase')) {
      const initialData = {
        designs: [],
        appointments: [],
        settings: {
          businessName: 'Crazy Claws',
          contactEmail: 'info@crazyclaws.com',
          contactPhone: '(555) 123-4567'
        }
      };
      localStorage.setItem('crazyClawsDatabase', JSON.stringify(initialData));
    }
  }

  getDatabase() {
    return JSON.parse(localStorage.getItem('crazyClawsDatabase'));
  }

  saveDatabase(data) {
    localStorage.setItem('crazyClawsDatabase', JSON.stringify(data));
  }

  // Design operations
  getDesigns() {
    return this.getDatabase().designs;
  }

  addDesign(design) {
    const db = this.getDatabase();
    design.id = Date.now();
    design.createdAt = new Date().toISOString();
    db.designs.push(design);
    this.saveDatabase(db);
    return design;
  }

  deleteDesign(id) {
    const db = this.getDatabase();
    db.designs = db.designs.filter(design => design.id !== id);
    this.saveDatabase(db);
  }

  // Appointment operations
  getAppointments() {
    return this.getDatabase().appointments;
  }

  addAppointment(appointment) {
    const db = this.getDatabase();
    appointment.id = Date.now();
    appointment.createdAt = new Date().toISOString();
    appointment.status = 'pending';
    db.appointments.push(appointment);
    this.saveDatabase(db);
    return appointment;
  }

  updateAppointment(id, updates) {
    const db = this.getDatabase();
    const index = db.appointments.findIndex(apt => apt.id === id);
    if (index !== -1) {
      db.appointments[index] = { ...db.appointments[index], ...updates };
      this.saveDatabase(db);
      return db.appointments[index];
    }
    return null;
  }

  deleteAppointment(id) {
    const db = this.getDatabase();
    db.appointments = db.appointments.filter(apt => apt.id !== id);
    this.saveDatabase(db);
  }

  // Export data as JSON
  exportData() {
    return JSON.stringify(this.getDatabase(), null, 2);
  }

  // Import data from JSON
  importData(jsonData) {
    try {
      const data = JSON.parse(jsonData);
      this.saveDatabase(data);
      return true;
    } catch (e) {
      console.error('Failed to import data:', e);
      return false;
    }
  }

  // Clear all data
  clearAllData() {
    this.initializeDatabase();
  }
}

export default new DatabaseService();