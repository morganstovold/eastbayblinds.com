"use client";

import React, { useState } from "react";
import { ConfigurableProduct } from "@/lib/static-products";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateProductConfig, resetProductConfig } from "@/lib/admin-actions";
import { staticProducts } from "@/lib/static-products";
import { X, Plus, RotateCcw } from "lucide-react";
import Image from "next/image";

interface ProductConfigForm {
  name?: string;
  description?: string;
  features?: string[];
  isFeatured?: boolean;
}

interface ProductsClientComponentProps {
  initialProducts: ConfigurableProduct[];
}

export default function ProductsClientComponent({
  initialProducts,
}: ProductsClientComponentProps) {
  const [products, setProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState<ConfigurableProduct | null>(null);
  const [form, setForm] = useState<ProductConfigForm>({});
  const [modalError, setModalError] = useState<string | null>(null);
  const [currentFeature, setCurrentFeature] = useState("");

  // Count featured products
  const featuredCount = products.filter((p) => p.isFeatured).length;

  function openEditModal(product: ConfigurableProduct) {
    setEditProduct(product);
    setForm({
      name: product.name,
      description: product.description,
      features: Array.isArray(product.features) ? product.features : [],
      isFeatured: product.isFeatured,
    });
    setModalError(null);
    setCurrentFeature("");
    setShowModal(true);
  }



  function closeModal() {
    setShowModal(false);
    setEditProduct(null);
    setForm({});
    setModalError(null);
    setCurrentFeature("");
  }

  function addFeature() {
    if (!currentFeature.trim()) return;
    
    const features = Array.isArray(form.features) ? form.features : [];
    if (!features.includes(currentFeature.trim())) {
      setForm((f: ProductConfigForm) => ({
        ...f,
        features: [...features, currentFeature.trim()],
      }));
    }
    setCurrentFeature("");
  }

  function removeFeature(index: number) {
    const features = Array.isArray(form.features) ? form.features : [];
    setForm((f: ProductConfigForm) => ({
      ...f,
      features: features.filter((_: string, i: number) => i !== index),
    }));
  }

    async function handleSave() {
    setLoading(true);
    setModalError(null);
    try {
      if (!editProduct) {
        setModalError("No product selected for editing.");
        setLoading(false);
        return;
      }

      // Validate required fields
      if (!form.name?.trim() || !form.description?.trim()) {
        setModalError("Name and description are required.");
        setLoading(false);
        return;
      }

      if (!Array.isArray(form.features)) {
        setModalError("Features must be an array.");
        setLoading(false);
        return;
      }

      // Enforce max 3 featured
      const willBeFeatured = !!form.isFeatured;
      if (
        willBeFeatured &&
        !editProduct.isFeatured &&
        featuredCount >= 3
      ) {
        setModalError("Only 3 products can be featured.");
        setLoading(false);
        return;
      }
      
      const result = await updateProductConfig(editProduct.id, {
        name: form.name?.trim(),
        description: form.description?.trim(),
        features: form.features,
        isFeatured: form.isFeatured,
      });

      if (!result.success) {
        setModalError(result.error || "Failed to update product.");
        setLoading(false);
        return;
      }

      // Update the product in the list
      setProducts((prev) =>
        prev.map((p) => (p.id === editProduct.id ? result.product! : p))
      );
      closeModal();
    } catch (e) {
      setModalError("Failed to update product.");
    } finally {
      setLoading(false);
    }
  }

  async function handleReset(id: string) {
    if (!window.confirm("Are you sure you want to reset this product to its defaults? This will remove any custom configuration."))
      return;
    setLoading(true);
    setError(null);
    try {
      const result = await resetProductConfig(id);
      if (!result.success) {
        setError(result.error || "Failed to reset product.");
        setLoading(false);
        return;
      }
      
      // Find the static product and reset the configurable product in our list
      const staticProduct = staticProducts.find(p => p.id === id);
      if (staticProduct) {
        setProducts((prev) =>
          prev.map((p) => 
            p.id === id 
              ? {
                  ...staticProduct,
                  name: staticProduct.defaultName,
                  description: staticProduct.defaultDescription,
                  features: staticProduct.defaultFeatures,
                  isFeatured: staticProduct.defaultIsFeatured,
                }
              : p
          )
        );
      }
    } catch (e) {
      setError("Failed to reset product.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Product Configuration</h2>
        <p className="text-sm text-gray-600">
          Configure marketing copy for static products. Only name, description, features, and featured status can be customized.
        </p>
      </div>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Product</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-center">Featured</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              const staticProduct = staticProducts.find(sp => sp.id === product.id);
              const isCustomized = staticProduct && (
                product.name !== staticProduct.defaultName ||
                product.description !== staticProduct.defaultDescription ||
                JSON.stringify(product.features) !== JSON.stringify(staticProduct.defaultFeatures) ||
                product.isFeatured !== staticProduct.defaultIsFeatured
              );
              
              return (
                <tr key={product.id} className="border-t">
                  <td className="px-4 py-2 space-x-3 flex items-center">
                    <div className="w-12 h-12 relative flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{product.name}</div>
                      {isCustomized && (
                        <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          Customized
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-2 capitalize">{product.category}</td>
                  <td className="px-4 py-2 text-center">
                    {product.isFeatured ? (
                      <span className="text-green-600 font-semibold">Yes</span>
                    ) : (
                      <span className="text-gray-400">No</span>
                    )}
                  </td>
                  <td className="px-4 py-2 text-center space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => openEditModal(product)}
                    >
                      Configure
                    </Button>
                    {isCustomized && (
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleReset(product.id)}
                        title="Reset to defaults"
                      >
                        <RotateCcw className="h-4 w-4" />
                      </Button>
                    )}
                  </td>
                </tr>
              );
            })}
            {products.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-8 text-gray-400">
                  No products available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      <Dialog open={showModal} onOpenChange={closeModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              Configure Product: {editProduct?.name}
            </DialogTitle>
            <p className="text-sm text-gray-600">
              Customize the marketing copy for this product. Leave fields empty to use defaults.
            </p>
          </DialogHeader>
          <div className="space-y-6">
            {/* Product Preview */}
            {editProduct && (
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 relative flex-shrink-0">
                  <Image
                    src={editProduct.image}
                    alt={editProduct.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{editProduct.name}</h4>
                  <p className="text-sm text-gray-600 capitalize">{editProduct.category}</p>
                  <p className="text-xs text-gray-500">Static Product ID: {editProduct.id}</p>
                </div>
              </div>
            )}

                          <div className="flex flex-col gap-2">
                <Label>Name</Label>
                <Input
                  value={form.name || ""}
                  onChange={(e) =>
                    setForm((f: ProductConfigForm) => ({ ...f, name: e.target.value }))
                  }
                  disabled={loading}
                  placeholder={editProduct?.defaultName}
                />
                <p className="text-xs text-gray-500">
                  Default: {editProduct?.defaultName}
                </p>
              </div>
              
              <div className="flex flex-col gap-2">
                <Label>Description</Label>
                <textarea
                  value={form.description || ""}
                  onChange={(e) =>
                    setForm((f: ProductConfigForm) => ({ ...f, description: e.target.value }))
                  }
                  disabled={loading}
                  placeholder={editProduct?.defaultDescription}
                  className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <p className="text-xs text-gray-500">
                  Default: {editProduct?.defaultDescription}
                </p>
              </div>
            <div className="flex flex-col gap-2">
              <Label>Features</Label>
              <div className="flex gap-2">
                <Input
                  value={currentFeature}
                  onChange={(e) => setCurrentFeature(e.target.value)}
                  placeholder="Enter a feature"
                  disabled={loading}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addFeature();
                    }
                  }}
                />
                <Button
                  type="button"
                  onClick={addFeature}
                  disabled={loading || !currentFeature.trim()}
                  size="sm"
                  variant="outline"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Features List */}
              {Array.isArray(form.features) && form.features.length > 0 && (
                <div className="space-y-2">
                  <Label className="text-sm text-gray-600">Added Features:</Label>
                  <div className="space-y-1 max-h-32 overflow-y-auto">
                    {form.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-gray-50 p-2 rounded text-sm"
                      >
                        <span>{feature}</span>
                        <Button
                          type="button"
                          onClick={() => removeFeature(index)}
                          disabled={loading}
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0 hover:bg-red-100 hover:text-red-600"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
                          <div className="flex items-center gap-2">
                <Switch
                  checked={!!form.isFeatured}
                  onCheckedChange={(checked) =>
                    setForm((f: ProductConfigForm) => ({ ...f, isFeatured: checked }))
                  }
                  disabled={
                    loading ||
                    (!form.isFeatured &&
                      featuredCount >= 3 &&
                      !editProduct?.isFeatured)
                  }
                />
                <Label>
                  Featured On Homepage{" "}
                  <span className="text-xs text-gray-500">(max 3)</span>
                </Label>
                {featuredCount >= 3 &&
                  !form.isFeatured &&
                  !editProduct?.isFeatured && (
                    <span className="text-xs text-orange-600 ml-2">
                      Max 3 featured
                    </span>
                  )}
              </div>
            {modalError && (
              <div className="text-red-600 text-sm">{modalError}</div>
            )}
          </div>
          <DialogFooter>
            <Button onClick={handleSave} disabled={loading}>
              Save Configuration
            </Button>
            <Button variant="outline" onClick={closeModal} disabled={loading}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
