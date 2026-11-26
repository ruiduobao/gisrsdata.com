---
title: "巴西森林影像数据集 2008：可视底图"
date: 2026-11-03 12:00:00
permalink: /pages/676005c8/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "brazil"
  - "deforestation"
  - "forest-code"
  - "google"
  - "rgb"
  - "satellite-imagery"
  - "spot"
---

# 巴西森林影像数据集 2008：可视底图

英文原名：Brazil Forest Imagery Dataset 2008: Visual Basemap

## 这是什么数据

该数据集提供巴西的可视影像底图，分辨率最高 5 米，主要摄于 2008 年，以支持[巴西森林法](https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/L12651compilado.htm)的实施。该镶嵌图由 SPOT 2、4 和 5 卫星数据合成。它是 Landsat 的高分辨率替代品，用于识别 2008 年 7 月 22 日监管截止日期时存在的固化区域、永久保护区（APP）和法定保留地。SPOT 覆盖的空缺以透明掩膜表示，以保持数据完整性。

### Google 为何创建这块底图

原始影像集合也可获取（见 [MS](/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_V1)、[MS_NC](/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_NC_V1)、[PMS_NC](/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PMS_NC_V1)、[PAN](/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PAN_V1)），Google 合成这个镶嵌图是为了提供无缝、开箱即用的产品。通过大规模进行辐射和几何校正，Google 将原本分散的原始卫星场景转化为一个统一图层，可在 [SICAR](https://car.gov.br)（巴西农村环境登记系统）等应用中立即可视化。

### 地理优先级与覆盖

为最大化即时环境影响，影像选择优先为农村环境登记（CAR）中登记的私人土地实现近乎完整的高分辨率覆盖。特别关注亚马逊生物群落和「毁林弧线」的五个州——马拉尼昂、马托格罗索、帕拉、朗多尼亚和托坎廷斯——这些州全州平均覆盖率达 93%。v1 中巴西全国平均覆盖率为 68%。在缺乏高质量 2008 年代影像的地方，覆盖空缺以透明掩膜表示，以保持数据完整性。

### 处理方法

处理方法的深入说明见[方法指南](/earth-engine/guides/spot_brazil_forest_imagery_dataset_2008_v1)，包括：

* **辐射定标：** 使用波段特定的物理增益和偏置元数据将原始数字值转换为大气层顶反射率，并按太阳辐照度和日地距离归一化。* **辐射归一化：** 为尽量减少影像间的辐射不连续，像元值通过直方图匹配调整至一个一致的 Landsat 2008 镶嵌目标。* **边缘精修：** Google 对影像掩膜应用了 2.5 像元的焦点最小值腐蚀，以去除源数据中的有损压缩伪影。* **云掩膜：** 受训测量员手工勾绘云和阴影周围的多边形，并将其转换为掩膜，以确保合成中只包含最有用的像元。* **自动配准误差校正：** 部分场景使用 `ee.Image.register` 算法与 2008 年代 Landsat 参考合成影像进行配准。* **合成：** 最终镶嵌图优先使用可得的最高分辨率像元，将 SPOT 5 影像（10 米）叠加在 SPOT 4 和 SPOT 2 之上。

### 局限性与已知问题

* **空间完整性：** 在没有影像满足项目严格的 2008 年代时间窗口（2007–2009）、云覆盖阈值或质量标准的地方存在空缺。* **原生分辨率不一：** 由于处理中使用了最近邻重采样，源影像不同标称分辨率之间的边界可能可见。* **残余配准误差：** 某些区域可能仍存在空间偏移，尤其是在地形起伏极端或森林茂密均质的区域。* **大气与云伪影：** 手工云掩膜并不彻底；用户可能遇到偶发的残余伪影，如薄卷云霾或小块云影。* **辐射不一致：** 相邻影像之间仍存在残余光谱差异，可能增加光谱方差并降低机器学习推理时类别分离的精度。* **光谱饱和：** 在极端明亮的区域，像元可能达到传感器的最大可探测限值，导致纹理和细节丢失。

### 数据访问

要访问该数据集，请填写[申请表](https://forms.gle/jQmCbWgarjENQBYz6)。

## 覆盖范围与时间

- 覆盖范围：巴西
- 时间范围：2007-01-01 至 2009-11-26

## 分辨率与规格

- 空间分辨率：约 5 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| R | 红光反射率 | 5 |  |
| G | 绿光反射率 | 5 |  |
| B | 蓝光反射率，表示 SPOT 2、4 和 5 伪自然彩色产品的合成蓝通道 | 5 |  |
| date | 观测日期（纪元秒） | 5 |  |
| scale | 源影像的像元大小（见[方法](/earth-engine/guides/spot_brazil_forest_imagery_dataset_2008_v1)） | 5 |  |
| satellite | 源卫星（SPOT 2、4 或 5） | 5 |  |
| coregistered | 布尔值：1 表示已应用自动配准误差校正（见[方法](/earth-engine/guides/spot_brazil_forest_imagery_dataset_2008_v1)） | 5 |  |

## 能拿来做什么

- 巴西森林法合规分析
- 历史土地覆盖与毁林制图
- 农村环境登记（CAR）核查

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('GOOGLE/BRAZIL_FOREST_2008/V1/VISUAL');
```

- 数据集编号（Earth Engine ID）：`GOOGLE/BRAZIL_FOREST_2008/V1/VISUAL`
- 提供方：Google、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_BRAZIL_FOREST_2008_V1_VISUAL

## 许可与引用

- 许可：proprietary
- 关键词：brazil, deforestation, forest-code, google, rgb, satellite-imagery, spot
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Brazil Forest Imagery Dataset 2008: Analytic Basemap](/pages/9ead8e0f/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ESA CCI 地上生物量（2007、2010、2015–2022，v6.0）](/pages/e9028b43/)
- [WaPOR 实际蒸散发与截留 2.0](/pages/f46d014b/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
