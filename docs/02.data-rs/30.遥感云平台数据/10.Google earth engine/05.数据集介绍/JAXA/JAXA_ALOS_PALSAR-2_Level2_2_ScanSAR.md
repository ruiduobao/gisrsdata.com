---
title: "PALSAR-2 ScanSAR 2.2 级产品"
date: 2026-11-03 12:00:00
permalink: /pages/636ee51c/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "alos2"
  - "eroc"
  - "jaxa"
  - "palsar2"
  - "radar"
  - "sar"
  - "satellite-imagery"
---

# PALSAR-2 ScanSAR 2.2 级产品

英文原名：PALSAR-2 ScanSAR Level 2.2

## 这是什么数据

25 米 PALSAR-2 ScanSAR 是 PALSAR-2 宽幅观测模式（观测宽度 350 km）的归一化后向散射数据。SAR 影像使用 ALOS World 3D - 30m（AW3D30）数字地表模型进行了正射校正与坡度校正。极化数据以 16 位数字量（DN）存储。DN 值可使用以下公式转换为以分贝（dB）为单位的 γ₀ 值：

* γ₀ = 10·log₁₀(DN²) − 83.0 dB

2.2 级数据已经过正射校正与辐射地形校正。

本数据集符合[地球观测卫星委员会（CEOS）](https://ceos.org/)的[陆地分析就绪数据（CARD4L）](https://ceos.org/ard/files/PFS/NRB/v5.5/CARD4L-PFS_NRB_v5.5.pdf)标准。

注意：本集合是异质的，混合了单极化（HH）与双极化（HH+HV，偶有 VV+VH）影像。用户在选择极化波段前，应先按 `Polarizations` 属性筛选集合（例如 `collection.filter(ee.Filter.listContains('Polarizations', 'HV'))`）。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2014 年 8 月 4 日至 2026 年 10 月 16 日；分辨率：25 米。
- 时间范围：2014-08-04 至 2026-10-16

## 分辨率与规格

- 空间分辨率：约 25 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| HH | HH 极化地形平坦化 γ₀ 后向散射系数。 | 25 |  |
| HV | HV 极化地形平坦化 γ₀ 后向散射系数。 | 25 |  |
| VV | VV 极化地形平坦化 γ₀ 后向散射系数。 | 25 |  |
| VH | VH 极化地形平坦化 γ₀ 后向散射系数。 | 25 |  |
| LIN | 局部入射角：雷达照射方向与坡面法线之间的夹角。 | 25 |  |
| MSK | 数据质量位掩膜。 | 25 |  |

## 能拿来做什么

- 地表形变与灾害应急监测
- 洪水与地表覆盖制图
- 雷达遥感教学与研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('JAXA/ALOS/PALSAR-2/Level2_2/ScanSAR');
```

- 数据集编号（Earth Engine ID）：`JAXA/ALOS/PALSAR-2/Level2_2/ScanSAR`
- 提供方：JAXA EORC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_PALSAR-2_Level2_2_ScanSAR

## 许可与引用

- 许可：proprietary
- 关键词：alos2, eroc, jaxa, palsar2, radar, sar, satellite-imagery
- 数据引用：The data used for this paper have been provided by Earth Observation
Research Center (EORC) of Japan Aerospace Exploration Agency (JAXA).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ALOS-2 PALSAR-2 StripMap Level 2.1](/pages/b836b19e/)
- [ALOS/AVNIR-2 ORI](/pages/d4abf354/)
- [Global PALSAR-2/PALSAR Yearly Mosaic, version 1](/pages/03cf5a7a/)
- [Global PALSAR-2/PALSAR Yearly Mosaic, version 2.5.0](/pages/13015f55/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
