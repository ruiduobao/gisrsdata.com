---
title: "全球海洋水色反射率产品（OLCI，300 米）"
date: 2026-11-03 12:00:00
permalink: /pages/f4ffb7b4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "oceans"
---

# 全球海洋水色反射率产品（OLCI，300 米）

英文原名：Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Reflectance, OLCI 300M

## 这是什么数据

全球海洋水色（Copernicus-GlobColour）数据集是由 ACRI-ST 开发的生物地球化学（BGC）产品，派生自 SeaWiFS、MODIS、OLCI 等多个卫星数据源。它提供一整套海洋学变量，包括：叶绿素（CHL）、浮游植物功能类型与粒径（PFT）、初级生产（PP）、悬浮物（SPM）、塞氏透明度深度（ZSD）、漫衰减（KD490）、颗粒物后向散射（BBP）、吸收系数（CDM）、反射率（RRS）等。

本数据集是哥白尼海洋服务（CMEMS）的全球产品，提供遥感反射率（Rrs）——水体的基本光学属性，表示离开海面的光。它派生自海洋与陆地水色仪（OLCI），这套 L4 数据集已处理成可直接使用的格式。300 米的高空间分辨率使它特别适合近岸与区域尺度的水质和海洋成分精细研究。

注意：提供方可能在一段时间后从其仓库中移除哥白尼海洋数据（尤其是近实时 NRT 观测），并可能把这些数据聚合进其他（如月度）产品；但 Earth Engine 集合中的对应资产仍然可用。

## 覆盖范围与时间

- 覆盖范围：全球海洋
- 时间范围：2025-03-01 至 2026-09-01

## 分辨率与规格

- 空间分辨率：约 300 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| RRS400 | 400 纳米遥感反射率 | 300 |  |
| RRS400_uncertainty | 400 纳米遥感反射率的不确定度，以百分之一为单位（如数值 5000 表示 50%） | 300 |  |
| RRS412 | 412 纳米遥感反射率 | 300 |  |
| RRS412_uncertainty | 412 纳米遥感反射率的不确定度，以百分之一为单位（如数值 5000 表示 50%） | 300 |  |
| RRS443 | 443 纳米遥感反射率 | 300 |  |
| RRS443_uncertainty | 443 纳米遥感反射率的不确定度，以百分之一为单位（如数值 5000 表示 50%） | 300 |  |
| RRS490 | 490 纳米遥感反射率 | 300 |  |
| RRS490_uncertainty | 490 纳米遥感反射率的不确定度，以百分之一为单位（如数值 5000 表示 50%） | 300 |  |
| RRS510 | 510 纳米遥感反射率 | 300 |  |
| RRS510_uncertainty | 510 纳米遥感反射率的不确定度，以百分之一为单位（如数值 5000 表示 50%） | 300 |  |
| RRS560 | 560 纳米遥感反射率 | 300 |  |
| RRS560_uncertainty | 560 纳米遥感反射率的不确定度，以百分之一为单位（如数值 5000 表示 50%） | 300 |  |
| RRS620 | 620 纳米遥感反射率 | 300 |  |
| RRS620_uncertainty | 620 纳米遥感反射率的不确定度，以百分之一为单位（如数值 5000 表示 50%） | 300 |  |
| RRS665 | 665 纳米遥感反射率 | 300 |  |
| RRS665_uncertainty | 665 纳米遥感反射率的不确定度，以百分之一为单位（如数值 5000 表示 50%） | 300 |  |
| RRS674 | 674 纳米遥感反射率 | 300 |  |
| RRS674_uncertainty | 674 纳米遥感反射率的不确定度，以百分之一为单位（如数值 5000 表示 50%） | 300 |  |
| RRS681 | 681 纳米遥感反射率 | 300 |  |
| RRS681_uncertainty | 681 纳米遥感反射率的不确定度，以百分之一为单位（如数值 5000 表示 50%） | 300 |  |
| RRS709 | 709 纳米遥感反射率 | 300 |  |
| RRS709_uncertainty | 709 纳米遥感反射率的不确定度，以百分之一为单位（如数值 5000 表示 50%） | 300 |  |
| flags | 陆地/水体掩膜位：0=水体，1=陆地 | 300 |  |

## 能拿来做什么

- 300 米分辨率的近岸水质精细研究
- 区域海洋成分反演
- 高分辨率海洋水色分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/OC_GLO_BGC/REFLECTANCE_OLCI_300M');
```

- 数据集编号（Earth Engine ID）：`COPERNICUS/MARINE/OC_GLO_BGC/REFLECTANCE_OLCI_300M`
- 提供方：Copernicus、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_OC_GLO_BGC_REFLECTANCE_OLCI_300M
* [User's Guide](https://documentation.marine.copernicus.eu/PUM/CMEMS-OC-PUM.pdf)
* [Quality Information Document](https://documentation.marine.copernicus.eu/QUID/CMEMS-OC-QUID-009-101to104-111-113-116-118.pdf)
* [Copernicus Marine Datastore](https://data.marine.copernicus.eu/products)

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：copernicus, oceans
- 数据引用：Copernicus Global Ocean Colour:  Global Ocean Satellite Observations,
ACRI-ST company (Sophia Antipolis, France) is providing Bio-Geo-Chemical
(BGC) products based on the Copernicus-GlobColour processor.
[doi:10.48670/moi-00279](https://doi.org/10.48670/moi-00279)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球海洋水色光学产品（多源，4 公里，月度）](/pages/b4a5e847/)
- [全球海洋水色初级生产产品（多源，4 公里）](/pages/6396836c/)
- [全球海洋水色反射率产品（多源，4 公里）](/pages/472dc170/)
- [全球海洋水色浮游植物产品（OLCI，300 米）](/pages/073c2f26/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
