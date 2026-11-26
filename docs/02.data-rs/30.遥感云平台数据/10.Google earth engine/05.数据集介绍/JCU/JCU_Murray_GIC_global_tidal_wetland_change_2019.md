---
title: "Murray 全球潮汐湿地变化 v1.0（1999–2019）"
date: 2026-11-03 12:00:00
permalink: /pages/8dfd16a2/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "coastal"
  - "ecosystem"
  - "intertidal"
  - "landsat-derived"
  - "mangrove"
  - "murray"
  - "saltmarsh"
  - "surface-ground-water"
  - "tidal-flat"
  - "tidal-marsh"
---

# Murray 全球潮汐湿地变化 v1.0（1999–2019）

英文原名：Murray Global Tidal Wetland Change v1.0 (1999-2019)

## 这是什么数据

Murray 全球潮汐湿地变化数据集包含全球潮汐湿地范围及其变化的图件。这些图件由三阶段分类制作，旨在：（i）估算潮汐湿地（定义为潮汐沼泽、潮滩或红树林生态系统）的全球分布；（ii）检测研究期内其变化；（iii）估算潮汐湿地变化事件的生态系统类型与发生时间。

该数据集的制作结合了 Landsat 5 至 8 获取的 1,166,385 景卫星影像的观测，以及已知会影响各生态系统类型分布的环境变量数据，包括温度、坡度与高程。影像包含研究期起止时间步的潮汐湿地范围产品波段（潮汐湿地出现的随机森林概率），以及整个研究期的潮汐湿地变化产品（潮汐湿地的损失与增加）。

请参阅[项目网站](https://www.globalintertidalchange.org/)上的[使用说明](https://www.globalintertidalchange.org/data-usage)。本软件所产出数据的方法、验证与局限的完整描述见相关科学论文。

另见 [UQ/murray/Intertidal/v1_1/global_intertidal](UQ_murray_Intertidal_v1_1_global_intertidal)，其中有潮滩生态系统分布的全球图件。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球海岸带；时间范围：1999 年至 2019 年；分辨率：30 米。
- 时间范围：1999-01-01 至 2019-12-31

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| loss | 在损失位置设为 1，其他位置掩膜。 | 30 |  |
| lossYear | 表示损失分析时间步结束年份的整数（如 19 = 2017–2019）。 | 30 |  |
| lossType | 损失类型：2 - 潮滩；3 - 红树林；5 - 潮汐沼泽。 | 30 |  |
| gain | 在增加位置设为 1，其他位置掩膜。 | 30 |  |
| gainYear | 表示增加分析时间步结束年份的整数（如 19 = 2017–2019）。 | 30 |  |
| gainType | 增加类型：2 - 潮滩；3 - 红树林；5 - 潮汐沼泽。 | 30 |  |
| twprobabilityStart | 第一个时间步（1999–2001）总体潮汐湿地类别的随机森林一致性，0–100 的整数。 | 30 |  |
| twprobabilityEnd | 最后一个时间步（2017–2019）总体潮汐湿地类别的随机森林一致性，0–100 的整数。 | 30 |  |

## 能拿来做什么

- 潮汐湿地（红树林/潮滩/盐沼）变化监测
- 海岸带生态保护与蓝碳评估
- 海平面上升影响研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('JCU/Murray/GIC/global_tidal_wetland_change/2019');
```

- 数据集编号（Earth Engine ID）：`JCU/Murray/GIC/global_tidal_wetland_change/2019`
- 提供方：Murray/JCU、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JCU_Murray_GIC_global_tidal_wetland_change_2019

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：coastal, ecosystem, intertidal, landsat-derived, mangrove, murray, saltmarsh, surface-ground-water, tidal-flat, tidal-marsh
- 数据引用：Murray, N.J., Worthington, T.A., Bunting, P., Duce, S., Hagger, V.,
Lovelock, C.E., Lucas, R., Saunders, M.I., Sheaves, M., Spalding, M.,
Waltham, N.J., Lyons, M.B., 2022. High-resolution mapping of losses and
gains of Earth's tidal wetlands. *Science*.
[doi:10.1126/science.abm9583](https://doi.org/10.1126/science.abm9583)

- DOI：10.1126/science.abm9583

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ECMWF 近实时 IFS 海浪预报](/pages/2f7bc360/)
- [ECMWF 近实时 IFS 海浪预报（短截断）](/pages/423330ad/)
- [GFW（全球渔业观察）每日捕捞小时数](/pages/7dfa6e21/)
- [GFW（全球渔业观察）每日船舶小时数](/pages/37ea4824/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
