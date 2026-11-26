---
title: "GOES-16 FDCC 系列 ABI 二级火/热点特征 CONUS"
date: 2026-11-03 12:00:00
permalink: /pages/fdfe82fc/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "abi"
  - "fdc"
  - "fire"
  - "goes"
  - "goes-16"
  - "goes-east"
  - "goes-r"
  - "hotspot"
  - "nesdis"
  - "noaa"
  - "ospo"
  - "wildfire"
---

# GOES-16 FDCC 系列 ABI 二级火/热点特征 CONUS

英文原名：GOES-16 FDCC Series ABI Level 2 Fire/Hot Spot Characterization CONUS

## 这是什么数据

[GOES](https://www.goes.noaa.gov) 卫星是由 NOAA 运行的地球静止气象卫星。

火（HSC）产品包含四幅影像：一幅为火掩膜形式，其他三幅的像元值标识火温度、火面积与火辐射功率。

ABI L2+ FHS 元数据掩膜为每个地球导航像元分配一个标志，指示其相对于 FHS 算法的处置。对误报容忍度最低的业务用户应关注「processed」与「saturated」类别（掩膜代码 10、11、30 与 31），但这些类别内仍可能有误报。

以前称为「GOES East」；自 2025 年 4 月 7 日起被 [GOES-19](https://developers.google.com/earth-engine/datasets/catalog/NOAA_GOES_19_FDCC) 取代。

[README](https://www.ncei.noaa.gov/products/satellite/goes-r)

NOAA 提供以下脚本，用于建议的类别、颜色图与可视化：

NOAA 卫星与产品业务办公室有一个带状态更新的[通用卫星消息](https://www.ospo.noaa.gov/Operations/messages.html) 频道。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：美国本土（CONUS）；时间范围：2017 年至 2025 年；分辨率：2,000 米。
- 时间范围：2017-05-24 至 2025-04-07

## 分辨率与规格

- 空间分辨率：约 2,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Area | 火面积。 | 2000 |  |
| Temp | 火温度。 | 2000 |  |
| Mask | 火掩膜类别。火掩膜影像中的像元值标识火类别与算法执行相关的诊断信息。六个火类别包括：良好质量或时间过滤的良好质量火像元；饱和火像元或时间过滤的饱和火像元；云污染或时间过滤的云污染火像元；高概率或时间过滤的高概率火像元；中概率或时间过滤的高概率火像元；低概率或时间过滤的高概率火像元。时间过滤火像元是源自在空间与时间上都紧密接近的火像元的那些。 | 2000 |  |
| Power | 火辐射功率。 | 2000 |  |
| DQF | 数据质量标志。 | 2000 |  |

## 能拿来做什么

- 野火近实时监测
- 火情预警
- 火灾科学研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/GOES/16/FDCC');
```

- 数据集编号（Earth Engine ID）：`NOAA/GOES/16/FDCC`
- 提供方：NOAA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_GOES_16_FDCC
- [GOES-16-17_FireDetection.js](https://github.com/google/earthengine-community/blob/master/datasets/scripts/GOES-16-17_FireDetection.js)
- [GOES-16-17_FireReclassification.js](https://github.com/google/earthengine-community/blob/master/datasets/scripts/GOES-16-17_FireReclassification.js)

## 许可与引用

- 许可：proprietary
- 关键词：abi, fdc, fire, goes, goes-16, goes-east, goes-r, hotspot, nesdis, noaa, ospo, wildfire
- 数据引用：Early characterization of the active fire detection products derived from the next generation
NPOESS/VIIRS and GOES-R/ABI instruments.  Schroeder, W., Csiszar, I., et al, (2010), Early
characterization of the active fire detection products derived from the next generation
NPOESS/VIIRS and GOES-R/ABI instruments, paper presented at 2010 IEEE International Geoscience
and Remote Sensing Symposium (IGARSS), Honolulu, HI.
[doi:10.1109/IGARSS.2010.5650863](https://doi.org/10.1109/IGARSS.2010.5650863)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GOES-16 FDCF 系列 ABI 二级火/热点特征全圆盘](/pages/a85f942c/)
- [GOES-17 FDCC 系列 ABI 二级火/热点特征 CONUS](/pages/2579124b/)
- [GOES-17 FDCF 系列 ABI 二级火/热点特征全圆盘](/pages/3480c331/)
- [GOES-18 FDCC 系列 ABI 二级火/热点特征 CONUS](/pages/6ba905f6/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
