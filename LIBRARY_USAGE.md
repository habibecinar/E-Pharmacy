# 📚 UI Kütüphaneleri Kullanım Rehberi

Bu projede kullanılan UI ve form kütüphaneleri.

## 📋 Yüklü Kütüphaneler

### 1. **React Hook Form** - Form Validation
- **Dokümantasyon:** https://react-hook-form.com/
- **Kullanım:** Form yönetimi ve validation

### 2. **React Ellipsis Text** - Metin Kısaltma  
- **Dokümantasyon:** https://www.npmjs.com/package/react-ellipsis-text
- **Kullanım:** Uzun metinleri "..." ile kısaltma

### 3. **MUI Date Pickers** - Tarih Seçici
- **Dokümantasyon:** https://mui.com/x/react-date-pickers/
- **Kullanım:** Tarih ve saat seçimi

### 4. **Blueprint.js** - UI Komponenti
- **Dokümantasyon:** https://blueprintjs.com/
- **Kullanım:** Tablo, buton, form elemanları

---

## 🎯 Kullanım Örnekleri

### 1️⃣ React Hook Form ile Form Validation

```jsx
import { useForm } from 'react-hook-form';
import { validationRules } from '../../utils/formValidation';

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', validationRules.email)}
        placeholder="Email"
      />
      {errors.email && <span>{errors.email.message}</span>}

      <input
        type="password"
        {...register('password', validationRules.password)}
        placeholder="Password"
      />
      {errors.password && <span>{errors.password.message}</span>}

      <button type="submit">Submit</button>
    </form>
  );
};
```

### 2️⃣ React Ellipsis Text - Metin Kısaltma

```jsx
import EllipsisText from 'react-ellipsis-text';

const ProductCard = ({ description }) => {
  return (
    <div>
      <EllipsisText
        text={description}
        length={100} // Maksimum karakter sayısı
      />
    </div>
  );
};

// Örnek:
// Uzun metin: "This is a very long product description..."
// Çıktı: "This is a very long product desc..."
```

### 3️⃣ MUI Date Picker - Tarih Seçimi

```jsx
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';

const OrderForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Order Date"
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
      />
    </LocalizationProvider>
  );
};
```

### 4️⃣ Blueprint.js - UI Components

```jsx
import { Button, Card, Elevation } from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';

const AdminCard = () => {
  return (
    <Card elevation={Elevation.TWO}>
      <h3>Dashboard Stats</h3>
      <Button intent="primary" icon="add">
        Add Product
      </Button>
    </Card>
  );
};
```

---

## 📦 Import Örnekleri

### Global Import (App.jsx veya main.jsx):
```jsx
// Blueprint CSS
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

// MUI için tema provider
import { ThemeProvider, createTheme } from '@mui/material/styles';
```

### Component Import:
```jsx
// React Hook Form
import { useForm, Controller } from 'react-hook-form';

// Ellipsis Text
import EllipsisText from 'react-ellipsis-text';

// MUI Date Picker
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// Blueprint
import { 
  Button, 
  Card, 
  Table, 
  Dialog, 
  Intent 
} from '@blueprintjs/core';
```

---

## 🎨 Gerçek Proje Örnekleri

### Ürün Tablosu (Blueprint Table):
```jsx
import { HTMLTable } from '@blueprintjs/core';
import EllipsisText from 'react-ellipsis-text';

const ProductsTable = ({ products }) => {
  return (
    <HTMLTable striped interactive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>
              <EllipsisText text={product.description} length={50} />
            </td>
            <td>${product.price}</td>
            <td>{product.stock}</td>
          </tr>
        ))}
      </tbody>
    </HTMLTable>
  );
};
```

### Sipariş Formu (Tüm Kütüphaneler):
```jsx
import { useForm, Controller } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Button, FormGroup, InputGroup } from '@blueprintjs/core';

const OrderForm = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Order:', data);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup label="Customer Name" labelFor="name">
          <InputGroup
            id="name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </FormGroup>

        <FormGroup label="Order Date" labelFor="date">
          <Controller
            name="orderDate"
            control={control}
            render={({ field }) => (
              <DatePicker {...field} />
            )}
          />
        </FormGroup>

        <Button type="submit" intent="primary" icon="tick">
          Submit Order
        </Button>
      </form>
    </LocalizationProvider>
  );
};
```

---

## ✅ Kontrol Listesi

- [x] react-hook-form yüklendi
- [x] react-ellipsis-text yüklendi
- [x] @mui/x-date-pickers yüklendi
- [x] @blueprintjs/core yüklendi
- [x] Validation rules oluşturuldu (`utils/formValidation.js`)
- [ ] Blueprint CSS global import edildi
- [ ] MUI Theme Provider ayarlandı
- [ ] Form örnekleri projeye eklendi

---

## 🚀 Sonraki Adımlar

1. **LoginPage ve RegisterPage'e react-hook-form entegre et**
2. **Product listing'de EllipsisText kullan**
3. **Order sayfasına DatePicker ekle**
4. **Admin panelinde Blueprint Table kullan**

İyi çalışmalar! 🎉
