import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, TrendingUp, Users, DollarSign, ShoppingCart } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { sampleDataset, DataRow } from '../data/sampleData';

const AnalyticsLab = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<string>('All');
  const [sortConfig, setSortConfig] = useState<{ key: keyof DataRow; direction: 'asc' | 'desc' } | null>(null);

  // Filter and sort data
  const filteredData = useMemo(() => {
    let data = [...sampleDataset];

    // Filter by search
    if (searchTerm) {
      data = data.filter(
        (row) =>
          row.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.region.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by region
    if (selectedRegion !== 'All') {
      data = data.filter((row) => row.region === selectedRegion);
    }

    // Filter by product
    if (selectedProduct !== 'All') {
      data = data.filter((row) => row.product === selectedProduct);
    }

    // Sort
    if (sortConfig) {
      data.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return data;
  }, [searchTerm, selectedRegion, selectedProduct, sortConfig]);

  // Calculate KPIs
  const kpis = useMemo(() => {
    const totalSales = filteredData.reduce((sum, row) => sum + row.sales, 0);
    const totalRevenue = filteredData.reduce((sum, row) => sum + row.revenue, 0);
    const totalCustomers = filteredData.reduce((sum, row) => sum + row.customers, 0);
    const avgOrderValue = totalRevenue / totalSales || 0;

    return {
      totalSales,
      totalRevenue,
      totalCustomers,
      avgOrderValue,
    };
  }, [filteredData]);

  // Prepare chart data
  const regionData = useMemo(() => {
    const grouped = filteredData.reduce((acc, row) => {
      if (!acc[row.region]) {
        acc[row.region] = { region: row.region, sales: 0, revenue: 0 };
      }
      acc[row.region].sales += row.sales;
      acc[row.region].revenue += row.revenue;
      return acc;
    }, {} as Record<string, { region: string; sales: number; revenue: number }>);

    return Object.values(grouped);
  }, [filteredData]);

  const productData = useMemo(() => {
    const grouped = filteredData.reduce((acc, row) => {
      if (!acc[row.product]) {
        acc[row.product] = { product: row.product, sales: 0, revenue: 0 };
      }
      acc[row.product].sales += row.sales;
      acc[row.product].revenue += row.revenue;
      return acc;
    }, {} as Record<string, { product: string; sales: number; revenue: number }>);

    return Object.values(grouped);
  }, [filteredData]);

  const regions = ['All', ...Array.from(new Set(sampleDataset.map((d) => d.region)))];
  const products = ['All', ...Array.from(new Set(sampleDataset.map((d) => d.product)))];

  const handleSort = (key: keyof DataRow) => {
    setSortConfig((current) => {
      if (!current || current.key !== key) {
        return { key, direction: 'asc' };
      }
      if (current.direction === 'asc') {
        return { key, direction: 'desc' };
      }
      return null;
    });
  };

  return (
    <section id="analytics-lab" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Analytics <span className="text-data-cyan">Lab</span>
          </h2>
          <p className="text-gray-400 text-lg">Interactive data exploration environment</p>
          <p className="text-sm text-yellow-500/70 mt-2">SIMULATED DATA</p>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20"
          >
            <div className="flex items-center justify-between mb-2">
              <ShoppingCart className="text-blue-400" size={24} />
              <TrendingUp className="text-green-400" size={16} />
            </div>
            <div className="text-3xl font-bold text-white">{kpis.totalSales.toLocaleString()}</div>
            <div className="text-sm text-gray-400 mt-1">Total Sales</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20"
          >
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="text-green-400" size={24} />
              <TrendingUp className="text-green-400" size={16} />
            </div>
            <div className="text-3xl font-bold text-white">${kpis.totalRevenue.toLocaleString()}</div>
            <div className="text-sm text-gray-400 mt-1">Total Revenue</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20"
          >
            <div className="flex items-center justify-between mb-2">
              <Users className="text-purple-400" size={24} />
              <TrendingUp className="text-green-400" size={16} />
            </div>
            <div className="text-3xl font-bold text-white">{kpis.totalCustomers.toLocaleString()}</div>
            <div className="text-sm text-gray-400 mt-1">Total Customers</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20"
          >
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="text-cyan-400" size={24} />
              <TrendingUp className="text-green-400" size={16} />
            </div>
            <div className="text-3xl font-bold text-white">${kpis.avgOrderValue.toFixed(2)}</div>
            <div className="text-sm text-gray-400 mt-1">Avg Order Value</div>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 p-6 rounded-xl bg-white/5 border border-white/10"
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter size={20} className="text-data-cyan" />
            <h3 className="text-lg font-semibold">Filters</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search products or regions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-data-cyan/50 focus:outline-none transition-colors"
              />
            </div>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white focus:border-data-cyan/50 focus:outline-none transition-colors"
            >
              {regions.map((region) => (
                <option key={region} value={region} className="bg-black">
                  {region === 'All' ? 'All Regions' : region}
                </option>
              ))}
            </select>
            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              className="px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white focus:border-data-cyan/50 focus:outline-none transition-colors"
            >
              {products.map((product) => (
                <option key={product} value={product} className="bg-black">
                  {product === 'All' ? 'All Products' : product}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Sales by Region */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-white/5 border border-white/10"
          >
            <h3 className="text-lg font-semibold mb-4">Sales by Region</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={regionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="region" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)' }}
                />
                <Bar dataKey="sales" fill="#06b6d4" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Revenue by Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl bg-white/5 border border-white/10"
          >
            <h3 className="text-lg font-semibold mb-4">Revenue by Product</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={productData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="product" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)' }}
                />
                <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Scatter Plot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl bg-white/5 border border-white/10 mb-12"
        >
          <h3 className="text-lg font-semibold mb-4">Sales vs Revenue Correlation</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="sales" name="Sales" stroke="#999" />
              <YAxis dataKey="revenue" name="Revenue" stroke="#999" />
              <Tooltip
                cursor={{ strokeDasharray: '3 3' }}
                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)' }}
              />
              <Legend />
              <Scatter name="Data Points" data={filteredData} fill="#8b5cf6" />
            </ScatterChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Data Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto rounded-xl bg-white/5 border border-white/10"
        >
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                {(['id', 'product', 'region', 'sales', 'customers', 'revenue'] as const).map((key) => (
                  <th
                    key={key}
                    onClick={() => handleSort(key)}
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-300 cursor-pointer hover:text-data-cyan transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                      {sortConfig?.key === key && (
                        <span className="text-data-cyan">{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.slice(0, 10).map((row, index) => (
                <motion.tr
                  key={row.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-t border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-gray-400">{row.id}</td>
                  <td className="px-6 py-4 text-sm text-white font-medium">{row.product}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{row.region}</td>
                  <td className="px-6 py-4 text-sm text-data-cyan">{row.sales}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{row.customers}</td>
                  <td className="px-6 py-4 text-sm text-green-400">${row.revenue.toLocaleString()}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
          <div className="px-6 py-4 bg-white/5 border-t border-white/5 text-sm text-gray-400">
            Showing {Math.min(10, filteredData.length)} of {filteredData.length} results
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnalyticsLab;
