import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { IoCubeOutline, IoCardOutline, IoDocumentTextOutline } from "react-icons/io5";

export default function CheckoutForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        // Data Pengiriman
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
        
        // Metode Pembayaran
        paymentMethod: "bank_transfer",
        
        // Catatan
        notes: ""
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        setErrors(prev => {
            if (prev[name]) {
                return {
                    ...prev,
                    [name]: ""
                };
            }
            return prev;
        });
    }, []);

    const validateForm = useCallback(() => {
        const newErrors = {};
        
        if (!formData.fullName.trim()) newErrors.fullName = "Nama lengkap wajib diisi";
        if (!formData.email.trim()) newErrors.email = "Email wajib diisi";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Format email tidak valid";
        if (!formData.phone.trim()) newErrors.phone = "Nomor telepon wajib diisi";
        if (!formData.address.trim()) newErrors.address = "Alamat wajib diisi";
        if (!formData.city.trim()) newErrors.city = "Kota wajib diisi";
        if (!formData.postalCode.trim()) newErrors.postalCode = "Kode pos wajib diisi";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }, [formData]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        
        if (validateForm()) {
            // Simulate successful checkout
            alert("Pesanan berhasil dibuat! Terima kasih telah berbelanja.");
            navigate("/");
        }
    }, [validateForm, navigate]);

    return (
        <div className="space-y-4 lg:space-y-6">
            <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Checkout</h1>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">Lengkapi data pengiriman dan pembayaran</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6" noValidate>
                {/* Data Pengiriman */}
                <section className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center gap-x-2">
                        <IoCubeOutline className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        Data Pengiriman
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Nama Lengkap *
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className={`w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 ${
                                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="Masukkan nama lengkap"
                                required
                                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                            />
                            {errors.fullName && <p id="fullName-error" className="text-red-500 text-xs mt-1" role="alert">{errors.fullName}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 ${
                                    errors.email ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="contoh@email.com"
                                required
                                aria-describedby={errors.email ? "email-error" : undefined}
                            />
                            {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1" role="alert">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Nomor Telepon *
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className={`w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 ${
                                    errors.phone ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="08xxxxxxxxxx"
                                required
                                aria-describedby={errors.phone ? "phone-error" : undefined}
                            />
                            {errors.phone && <p id="phone-error" className="text-red-500 text-xs mt-1" role="alert">{errors.phone}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Kode Pos *
                            </label>
                            <input
                                type="text"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleInputChange}
                                className={`w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 ${
                                    errors.postalCode ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="12345"
                                required
                                aria-describedby={errors.postalCode ? "postalCode-error" : undefined}
                            />
                            {errors.postalCode && <p id="postalCode-error" className="text-red-500 text-xs mt-1" role="alert">{errors.postalCode}</p>}
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Kota *
                        </label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className={`w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 ${
                                errors.city ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Jakarta"
                            required
                            aria-describedby={errors.city ? "city-error" : undefined}
                        />
                        {errors.city && <p id="city-error" className="text-red-500 text-xs mt-1" role="alert">{errors.city}</p>}
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Alamat Lengkap *
                        </label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            rows={3}
                            className={`w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 ${
                                errors.address ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Jl. Contoh No. 123, RT/RW 01/02"
                            required
                            aria-describedby={errors.address ? "address-error" : undefined}
                        />
                        {errors.address && <p id="address-error" className="text-red-500 text-xs mt-1" role="alert">{errors.address}</p>}
                    </div>
                </section>

                {/* Metode Pembayaran */}
                <section className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center gap-x-2">
                        <IoCardOutline className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                        Metode Pembayaran
                    </h2>
                    
                    <fieldset className="space-y-3">
                        <legend className="sr-only">Pilih metode pembayaran</legend>
                        <label className="flex items-center p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="bank_transfer"
                                checked={formData.paymentMethod === "bank_transfer"}
                                onChange={handleInputChange}
                                className="mr-3"
                                aria-describedby="bank-transfer-desc"
                            />
                            <div>
                                <div className="font-medium">Transfer Bank</div>
                                <div id="bank-transfer-desc" className="text-sm text-gray-600">BCA, Mandiri, BNI, BRI</div>
                            </div>
                        </label>

                        <label className="flex items-center p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="e_wallet"
                                checked={formData.paymentMethod === "e_wallet"}
                                onChange={handleInputChange}
                                className="mr-3"
                                aria-describedby="e-wallet-desc"
                            />
                            <div>
                                <div className="font-medium">E-Wallet</div>
                                <div id="e-wallet-desc" className="text-sm text-gray-600">GoPay, OVO, DANA, ShopeePay</div>
                            </div>
                        </label>

                        <label className="flex items-center p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="cod"
                                checked={formData.paymentMethod === "cod"}
                                onChange={handleInputChange}
                                className="mr-3"
                                aria-describedby="cod-desc"
                            />
                            <div>
                                <div className="font-medium">Cash on Delivery (COD)</div>
                                <div id="cod-desc" className="text-sm text-gray-600">Bayar saat barang diterima</div>
                            </div>
                        </label>
                    </fieldset>
                </section>

                {/* Catatan */}
                <section className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center gap-x-2">
                        <IoDocumentTextOutline className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                        Catatan
                    </h2>
                    
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Catatan untuk penjual (opsional)"
                    />
                </section>

                {/* Tombol Submit */}
                <nav className="flex gap-4">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Kembali
                    </button>
                    <button
                        type="submit"
                        className="flex-1 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 font-medium"
                    >
                        Proses Pembayaran
                    </button>
                </nav>
            </form>
        </div>
    );
}
