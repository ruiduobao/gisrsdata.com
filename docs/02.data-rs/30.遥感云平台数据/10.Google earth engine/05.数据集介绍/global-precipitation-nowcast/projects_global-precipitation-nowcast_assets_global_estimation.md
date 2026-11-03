---
title: "Oya: 5km Quasi-Global Precipitation Estimates"
date: 2026-11-03 12:00:00
permalink: /pages/1f5accf0/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "geophysical"
  - "gpm"
  - "precipitation"
  - "weather"
---

# Oya: 5km Quasi-Global Precipitation Estimates

## 数据集简介

Oya is a quasi-global, high-resolution precipitation estimation dataset
derived from geostationary (GEO) satellite observations.

The Oya model utilizes the full spectrum of visible and infrared (VIS-IR)
channels from a constellation of GEO satellites — including GOES-16/18,
Meteosat-9/10, and Himawari-8/9 — to generate precipitation estimates
covering 60°N to 60°S.

To address the inherent data imbalance between rain and no-rain events,
Oya employs a two-stage deep learning approach. It combines two U-Net
models: one specialized for precipitation detection and another for
Quantitative Precipitation Estimation (QPE). The models are
trained using high-resolution GPM Combined Radar-Radiometer Algorithm
(CORRA) v07 data as ground truth and are pre-trained on IMERG-Final
retrievals to enhance robustness.

Oya demonstrates superior performance compared to existing operational
GEO-based baselines, such as the PERSIANN DynamicInfrared Rain Rate
(PDIR-Now) and the Convective Rainfall Rate (CRR), across all precipitation
intensities. It also outperforms Passive Microwave (PMW) based products like
the Integrated Multisatellite Retrievals for GPM (IMERG) Early and is
competitive with research-grade products like IMERG Final, which has a
3.5-month latency. This dataset includes a half-hourly historical record
generated from 2004 with a spatial resolution of 5km.

Limitations:

* Geographic Decline: Retrieval accuracy is highest in tropical zones and
  degrades at higher latitudes. This is attributed to geostationary satellite
  viewing angle effects, specifically limb darkening and parallax shift.
* Topographic Challenges: The model shows reduced performance in arid and
  high-altitude regions, notably the Tibetan Plateau.
* Indirect Observation: As an IR/VIS-based product, Oya infers precipitation
  from cloud-top properties rather than directly sensing raindrops (as radar
  or passive microwave instruments do).

Google makes no commitment about future updates to this dataset.

**Note: The associated paper, Oya: Deep Learning for Accurate Global
Precipitation Estimation, has not yet gone through formal peer review. It
would be released on arxiv soon.**

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/global-precipitation-nowcast/assets/global_estimation`
- 数据类型：影像集合（ImageCollection）
- 提供方：Google、Google Earth Engine
- 时间范围：2004-01-01 至 2026-05-26
- 空间分辨率：5000 米
- 许可：CC-BY-4.0
- 关键词：climate, geophysical, gpm, precipitation, weather

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| precipitation | Precipitation estimate | 5000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/global-precipitation-nowcast/assets/global_estimation');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_global-precipitation-nowcast_assets_global_estimation

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
