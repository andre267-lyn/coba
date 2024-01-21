import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ExportDataService {
  exportToCsv(data: Record<string, any>[], filename: string): void {
    const csvData = this.convertToCsv(data);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, filename);
  }

  private convertToCsv(data: Record<string, any>[]): string {
    if (data.length === 0) {
      return '';
    }

    const headers = this.getHeaders(data[0]);
    const rows = data.map(row => this.convertRowToCsv(row));
    return headers + '\n' + rows.join('\n');
  }

  private getHeaders(data: Record<string, any>): string {
    return Object.keys(data)
      .map(key => key.replace(/_/g, ' '))
      .map(key => key.charAt(0).toUpperCase() + key.slice(1))
      .join(',');
  }

  private convertRowToCsv(row: Record<string, any>): string {
    return Object.values(row)
      .map(val => {
        if (val instanceof Date) {
          // Format tanggal sesuai kebutuhan
          return val.toISOString(); // Contoh: Menggunakan format ISO
        }
        return val.toString();
      })
      .join(',');
  }
}
