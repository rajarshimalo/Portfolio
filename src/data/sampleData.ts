export interface DataRow {
  id: number;
  product: string;
  region: string;
  sales: number;
  customers: number;
  date: string;
  revenue: number;
}

export const sampleDataset: DataRow[] = [
  { id: 1, product: 'Laptop', region: 'North', sales: 145, customers: 89, date: '2024-01', revenue: 72500 },
  { id: 2, product: 'Phone', region: 'South', sales: 234, customers: 156, date: '2024-01', revenue: 58500 },
  { id: 3, product: 'Tablet', region: 'East', sales: 167, customers: 112, date: '2024-01', revenue: 41750 },
  { id: 4, product: 'Monitor', region: 'West', sales: 198, customers: 134, date: '2024-01', revenue: 49500 },
  { id: 5, product: 'Keyboard', region: 'North', sales: 312, customers: 245, date: '2024-02', revenue: 15600 },
  { id: 6, product: 'Mouse', region: 'South', sales: 289, customers: 198, date: '2024-02', revenue: 8670 },
  { id: 7, product: 'Laptop', region: 'East', sales: 176, customers: 98, date: '2024-02', revenue: 88000 },
  { id: 8, product: 'Phone', region: 'West', sales: 267, customers: 178, date: '2024-02', revenue: 66750 },
  { id: 9, product: 'Tablet', region: 'North', sales: 189, customers: 123, date: '2024-03', revenue: 47250 },
  { id: 10, product: 'Monitor', region: 'South', sales: 223, customers: 156, date: '2024-03', revenue: 55750 },
  { id: 11, product: 'Keyboard', region: 'East', sales: 334, customers: 267, date: '2024-03', revenue: 16700 },
  { id: 12, product: 'Mouse', region: 'West', sales: 301, customers: 223, date: '2024-03', revenue: 9030 },
  { id: 13, product: 'Laptop', region: 'North', sales: 156, customers: 102, date: '2024-04', revenue: 78000 },
  { id: 14, product: 'Phone', region: 'South', sales: 278, customers: 189, date: '2024-04', revenue: 69500 },
  { id: 15, product: 'Tablet', region: 'East', sales: 201, customers: 145, date: '2024-04', revenue: 50250 },
];
