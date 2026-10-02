"use client";

import React from "react";

import {
  Building2,
  MapPin,
  Maximize2,
  SlidersHorizontal,
  Sparkles,
  Warehouse,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BASEMENT_FINISH_OPTIONS,
  BUILDING_TYPE_OPTIONS,
  EXTERIOR_OPTIONS,
  FOUNDATION_OPTIONS,
  GARAGE_TYPE_OPTIONS,
  HOUSE_STYLE_OPTIONS,
  NEIGHBORHOOD_OPTIONS,
  PropertyFormInputs,
} from "@/lib/sample-data";

interface PredictionFormProps {
  inputs: PropertyFormInputs;
  onChange: (updated: Partial<PropertyFormInputs>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function PredictionForm({
  inputs,
  onChange,
  onSubmit,
}: PredictionFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-8 rounded-3xl border border-border/80 bg-card p-6 shadow-md sm:p-8"
    >
      <div className="flex items-center justify-between border-b border-border/60 pb-4">
        <div>
          <h2 className="flex items-center gap-2 font-display text-xl font-bold text-foreground sm:text-2xl">
            <SlidersHorizontal className="size-5 text-[#142D28] dark:text-[#B9F27C]" />
            Property Specifications
          </h2>
          <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
            Provide structural and spatial features for machine learning
            valuation.
          </p>
        </div>
        <span className="hidden items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-[11px] font-semibold text-muted-foreground sm:inline-flex">
          <Sparkles className="size-3 text-[#142D28] dark:text-[#B9F27C]" /> 18
          Model Features
        </span>
      </div>

      {/* Group 1: Location & Property Details */}
      <div className="space-y-4">
        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#142D28] dark:text-[#B9F27C]">
          <MapPin className="size-4" />
          1. Location & Core Property Details
        </h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Neighborhood */}
          <div className="space-y-2">
            <Label htmlFor="neighborhood" className="text-xs font-semibold">
              Neighborhood Location <span className="text-destructive">*</span>
            </Label>
            <Select
              value={inputs.neighborhood}
              onValueChange={(val) => onChange({ neighborhood: val })}
            >
              <SelectTrigger id="neighborhood" className="h-11 rounded-xl">
                <SelectValue placeholder="Select Neighborhood" />
              </SelectTrigger>
              <SelectContent>
                {NEIGHBORHOOD_OPTIONS.map((n) => (
                  <SelectItem key={n.value} value={n.value}>
                    {n.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Overall Quality */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="overallQual" className="text-xs font-semibold">
                Overall Quality Rating{" "}
                <span className="text-destructive">*</span>
              </Label>
              <span className="rounded bg-muted px-2 py-0.5 font-mono text-xs font-bold text-[#142D28] dark:text-[#B9F27C]">
                {inputs.overallQual} / 10
              </span>
            </div>
            <Input
              id="overallQual"
              type="range"
              min={1}
              max={10}
              step={1}
              value={inputs.overallQual}
              onChange={(e) =>
                onChange({ overallQual: parseInt(e.target.value) || 1 })
              }
              className="h-11 cursor-pointer"
            />
          </div>

          {/* Overall Condition */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="overallCond" className="text-xs font-semibold">
                Overall Condition Rating{" "}
                <span className="text-destructive">*</span>
              </Label>
              <span className="rounded bg-muted px-2 py-0.5 font-mono text-xs font-bold text-[#142D28] dark:text-[#B9F27C]">
                {inputs.overallCond} / 10
              </span>
            </div>
            <Input
              id="overallCond"
              type="range"
              min={1}
              max={10}
              step={1}
              value={inputs.overallCond}
              onChange={(e) =>
                onChange({ overallCond: parseInt(e.target.value) || 1 })
              }
              className="h-11 cursor-pointer"
            />
          </div>

          {/* Year Built */}
          <div className="space-y-2">
            <Label htmlFor="yearBuilt" className="text-xs font-semibold">
              Year Built <span className="text-destructive">*</span>
            </Label>
            <Input
              id="yearBuilt"
              type="number"
              min={1870}
              max={2026}
              value={inputs.yearBuilt}
              onChange={(e) =>
                onChange({ yearBuilt: parseInt(e.target.value) || 2000 })
              }
              className="h-11 rounded-xl"
            />
          </div>

          {/* House Style */}
          <div className="space-y-2">
            <Label htmlFor="houseStyle" className="text-xs font-semibold">
              House Architectural Style
            </Label>
            <Select
              value={inputs.houseStyle}
              onValueChange={(val) => onChange({ houseStyle: val })}
            >
              <SelectTrigger id="houseStyle" className="h-11 rounded-xl">
                <SelectValue placeholder="Select Style" />
              </SelectTrigger>
              <SelectContent>
                {HOUSE_STYLE_OPTIONS.map((s) => (
                  <SelectItem key={s.value} value={s.value}>
                    {s.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Group 2: Building Information */}
      <div className="space-y-4 border-t border-border/60 pt-4">
        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#142D28] dark:text-[#B9F27C]">
          <Building2 className="size-4" />
          2. Building & Structural Specs
        </h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Building Type */}
          <div className="space-y-2">
            <Label htmlFor="bldgType" className="text-xs font-semibold">
              Building Type
            </Label>
            <Select
              value={inputs.bldgType}
              onValueChange={(val) => onChange({ bldgType: val })}
            >
              <SelectTrigger id="bldgType" className="h-11 rounded-xl">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                {BUILDING_TYPE_OPTIONS.map((b) => (
                  <SelectItem key={b.value} value={b.value}>
                    {b.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Foundation */}
          <div className="space-y-2">
            <Label htmlFor="foundation" className="text-xs font-semibold">
              Foundation Type
            </Label>
            <Select
              value={inputs.foundation}
              onValueChange={(val) => onChange({ foundation: val })}
            >
              <SelectTrigger id="foundation" className="h-11 rounded-xl">
                <SelectValue placeholder="Select Foundation" />
              </SelectTrigger>
              <SelectContent>
                {FOUNDATION_OPTIONS.map((f) => (
                  <SelectItem key={f.value} value={f.value}>
                    {f.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Exterior */}
          <div className="space-y-2">
            <Label htmlFor="exterior1st" className="text-xs font-semibold">
              Exterior Covering
            </Label>
            <Select
              value={inputs.exterior1st}
              onValueChange={(val) => onChange({ exterior1st: val })}
            >
              <SelectTrigger id="exterior1st" className="h-11 rounded-xl">
                <SelectValue placeholder="Select Exterior" />
              </SelectTrigger>
              <SelectContent>
                {EXTERIOR_OPTIONS.map((e) => (
                  <SelectItem key={e.value} value={e.value}>
                    {e.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Heating & Air Conditioning */}
          <div className="space-y-2">
            <Label htmlFor="centralAir" className="text-xs font-semibold">
              Central Air Conditioning
            </Label>
            <Select
              value={inputs.centralAir}
              onValueChange={(val) => onChange({ centralAir: val })}
            >
              <SelectTrigger id="centralAir" className="h-11 rounded-xl">
                <SelectValue placeholder="Select Central AC" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Y">Yes (Central AC Installed)</SelectItem>
                <SelectItem value="N">No (No Central AC)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Group 3: Area & Rooms */}
      <div className="space-y-4 border-t border-border/60 pt-4">
        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#142D28] dark:text-[#B9F27C]">
          <Maximize2 className="size-4" />
          3. Area Dimensions & Room Counts
        </h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="grLivArea" className="text-xs font-semibold">
              Above Grade Living Area (sq.ft){" "}
              <span className="text-destructive">*</span>
            </Label>
            <Input
              id="grLivArea"
              type="number"
              min={300}
              max={10000}
              value={inputs.grLivArea}
              onChange={(e) =>
                onChange({ grLivArea: parseInt(e.target.value) || 0 })
              }
              className="h-11 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lotArea" className="text-xs font-semibold">
              Lot Area (sq.ft) <span className="text-destructive">*</span>
            </Label>
            <Input
              id="lotArea"
              type="number"
              min={1000}
              max={200000}
              value={inputs.lotArea}
              onChange={(e) =>
                onChange({ lotArea: parseInt(e.target.value) || 0 })
              }
              className="h-11 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bedroomAbvGr" className="text-xs font-semibold">
              Bedrooms Count
            </Label>
            <Input
              id="bedroomAbvGr"
              type="number"
              min={0}
              max={10}
              value={inputs.bedroomAbvGr}
              onChange={(e) =>
                onChange({ bedroomAbvGr: parseInt(e.target.value) || 0 })
              }
              className="h-11 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fullBath" className="text-xs font-semibold">
              Full Bathrooms
            </Label>
            <Input
              id="fullBath"
              type="number"
              min={0}
              max={6}
              value={inputs.fullBath}
              onChange={(e) =>
                onChange({ fullBath: parseInt(e.target.value) || 0 })
              }
              className="h-11 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="halfBath" className="text-xs font-semibold">
              Half Bathrooms
            </Label>
            <Input
              id="halfBath"
              type="number"
              min={0}
              max={4}
              value={inputs.halfBath}
              onChange={(e) =>
                onChange({ halfBath: parseInt(e.target.value) || 0 })
              }
              className="h-11 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="totRmsAbvGrd" className="text-xs font-semibold">
              Total Rooms Above Grade
            </Label>
            <Input
              id="totRmsAbvGrd"
              type="number"
              min={2}
              max={20}
              value={inputs.totRmsAbvGrd}
              onChange={(e) =>
                onChange({ totRmsAbvGrd: parseInt(e.target.value) || 0 })
              }
              className="h-11 rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Group 4: Garage & Basement Details */}
      <div className="space-y-4 border-t border-border/60 pt-4">
        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#142D28] dark:text-[#B9F27C]">
          <Warehouse className="size-4" />
          4. Garage & Basement Facilities
        </h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="totalBsmtSF" className="text-xs font-semibold">
              Total Basement Area (sq.ft)
            </Label>
            <Input
              id="totalBsmtSF"
              type="number"
              min={0}
              max={5000}
              value={inputs.totalBsmtSF}
              onChange={(e) =>
                onChange({ totalBsmtSF: parseInt(e.target.value) || 0 })
              }
              className="h-11 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bsmtFinType1" className="text-xs font-semibold">
              Basement Finish Type
            </Label>
            <Select
              value={inputs.bsmtFinType1}
              onValueChange={(val) => onChange({ bsmtFinType1: val })}
            >
              <SelectTrigger id="bsmtFinType1" className="h-11 rounded-xl">
                <SelectValue placeholder="Select Finish" />
              </SelectTrigger>
              <SelectContent>
                {BASEMENT_FINISH_OPTIONS.map((f) => (
                  <SelectItem key={f.value} value={f.value}>
                    {f.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="garageCars" className="text-xs font-semibold">
              Garage Capacity (Car count)
            </Label>
            <Input
              id="garageCars"
              type="number"
              min={0}
              max={5}
              value={inputs.garageCars}
              onChange={(e) =>
                onChange({ garageCars: parseInt(e.target.value) || 0 })
              }
              className="h-11 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="garageArea" className="text-xs font-semibold">
              Garage Area (sq.ft)
            </Label>
            <Input
              id="garageArea"
              type="number"
              min={0}
              max={2000}
              value={inputs.garageArea}
              onChange={(e) =>
                onChange({ garageArea: parseInt(e.target.value) || 0 })
              }
              className="h-11 rounded-xl"
            />
          </div>

          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="garageType" className="text-xs font-semibold">
              Garage Attachment Type
            </Label>
            <Select
              value={inputs.garageType}
              onValueChange={(val) => onChange({ garageType: val })}
            >
              <SelectTrigger id="garageType" className="h-11 rounded-xl">
                <SelectValue placeholder="Select Garage Type" />
              </SelectTrigger>
              <SelectContent>
                {GARAGE_TYPE_OPTIONS.map((g) => (
                  <SelectItem key={g.value} value={g.value}>
                    {g.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </form>
  );
}
